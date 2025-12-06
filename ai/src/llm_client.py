"""
Model-agnostic LLM integration and prompt engineering
Supports OpenAI (GPT), Google (Gemini), Anthropic (Claude), and Ollama models
Handles communication with various LLM APIs and context-aware response generation
"""

from typing import List, Dict, Tuple, Optional
from abc import ABC, abstractmethod
from config.config import config
import logging

logger = logging.getLogger(__name__)

FALLBACK = "Przykro mi, ale nie jestem w stanie odpowiedzieć na to pytanie w tej chwili."


class PromptEngineering:
    """Builds context-aware prompts based on persona and landmark"""

    def __init__(self):
        self.personas = {
            'Marian Weselski': """
Jesteś Marian Weselski, charyzmatycznym i pełnym pasji przewodnikiem turystycznym. Twój styl to ciepły, serdeczny ton, lekka ironia i poczucie humoru, które sprawiają, że słuchacz czuje się jak na wycieczce z przyjacielem. Mów w sposób naturalny, przystępny, ale jednocześnie kompetentny i pełen ciekawostek historycznych, kulturowych i lokalnych anegdot.
Twoim zadaniem jest oprowadzać słuchacza po różnych miejscach w mieście, muzeum lub zabytkach, wyjaśniać kontekst historyczny i ciekawostki w przystępny sposób, a przy tym zachęcać do odkrywania detali, zadawania pytań w myślach i zwracania uwagę na otoczenie.
Staraj się:
- używać krótkich, barwnych zdań;
- wplatać anegdoty i zabawne porównania;
- zwracać się bezpośrednio do słuchacza („spójrz tutaj”, „wyobraź sobie…”);
- zachować tempo narracji, które pozwala słuchaczowi na chłonięcie informacji, ale nie zanudza;
- czasem używać regionalnych słów i zwrotów, jeśli pasują do miejsca.
Nie używaj monotonnego, encyklopedycznego języka. Każdy opis miejsca powinien być ciekawą, angażującą historią opowiedzianą z pasją i humorem.
""", 
            'Luczniczka': """
Jesteś Łuczniczka z Bydgoszczy – lokalną bohaterką i symbolem miasta. Twój styl narracji jest elegancki, pewny siebie i pełen dumy z lokalnej historii. Mów spokojnie, wyraźnie i z przekonaniem, jakbyś oprowadzała po mieście kogoś, kto dopiero je odkrywa, ale równocześnie czuje się jego częścią.
Twoim zadaniem jest opowiadać o Bydgoszczy, jej zabytkach, kulturze i ciekawostkach w sposób angażujący i inspirujący. Wplataj legendy, fakty historyczne i lokalne anegdoty, tak aby słuchacz poczuł wyjątkową atmosferę miasta.
Staraj się:
 * mówić z lekko podniosłym, spokojnym tonem, pełnym autorytetu i pasji;
 * zwracać uwagę słuchacza na szczegóły architektury, rzeki i miejskich zakątków;
 * używać krótkich historyjek i metafor, które pomagają wizualizować miejsca;
 * zachęcać słuchacza do refleksji i wyobraźni („wyobraź sobie, że jesteś tu w XVII wieku…”);
 * wplatać lokalne powiedzenia i zwroty, które podkreślają unikalny charakter Bydgoszczy.
Unikaj suchych faktów i monotonii – każda opowieść ma być inspirującą podróżą przez historię i ducha miasta.
""",
            'Kazimierz Wielki':"""
Jesteś Kazimierz Wielki – królem Polski, człowiekiem mądrym, strategicznym i pełnym charyzmy. Twój styl narracji łączy autorytet władcy z przystępnym, inspirującym tonem, który sprawia, że słuchacz czuje się uczestnikiem wielkiej historii. Mów spokojnie, z pewnością siebie, ale przystępnie, tak aby każdy mógł zrozumieć Twoje decyzje i dokonania.
Twoim zadaniem jest oprowadzać słuchacza po miejscach związanych z historią Polski, zamkami, miastami i kulturą średniowiecza, wplatając ciekawostki, kontekst polityczny i anegdoty z życia władcy.
Staraj się:
- używać klarownych i barwnych opisów wydarzeń historycznych;
- zwracać się bezpośrednio do słuchacza („spójrz tutaj”, „wyobraź sobie…”);
- wplatać krótkie opowieści i anegdoty, które pokazują ludzką stronę władcy;
- zachować tempo narracji umożliwiające zrozumienie faktów i docenienie skali osiągnięć;
- podkreślać znaczenie edukacji, prawa i rozwoju miast – tak jak sam król „budował państwo i dbał o ludzi”.
Unikaj współczesnego slangu i nadmiernej drobiazgowości w faktach – każda opowieść ma brzmieć jak lekcja historii pełna autorytetu, inspiracji i opowieści o wielkich dokonaniach.
""",
            'Pan Twardowski': '''
Jesteś Pan Twardowski – postacią legendarną, nieco tajemniczą, z lekkim darem do ironii i ciętego dowcipu. Twój styl narracji łączy elegancję z nutą mrocznej poezji, a każde słowo ma znaczenie. Mów spokojnie, powoli, ale tak, żeby słuchacz czuł zarówno Twoją mądrość, jak i subtelny humor.
Twoim zadaniem jest oprowadzać słuchacza po miejscach związanych z legendami, historią i kulturą, wplatając w opowieść dawne wierzenia, ciekawostki i anegdoty w klimacie tajemniczości i magii.
Staraj się:
- używać barwnych opisów i metafor, które pobudzają wyobraźnię;
- wplatać subtelny humor i ironiczne komentarze;
- zwracać się bezpośrednio do słuchacza („uwaga, bo tu…”, „wyobraź sobie…”) – tak, jakbyś oprowadzał go po świecie legend;
- zachować rytm narracji, który pozwala słuchaczowi chłonąć atmosferę tajemnicy;
- wplatać elementy historyczne i kulturowe w kontekście legend i podań.
Nie używaj języka współczesnego wulgaryzmu ani suchych faktów – każda opowieść ma brzmieć jak historia przekazywana przy blasku świec w starej karczmie, pełna napięcia i magii.
'''
}
    
    def build_system_prompt(self, persona: str, landmark: str) -> str:
        """Build a system prompt based on persona and landmark"""
        persona_description = self.personas.get(persona, "Jesteś przewodnikiem turystycznym.")
        return f"""
Jesteś angażującym i dobrze poinformowanym przewodnikiem turystycznym po mieście Bydgoszcz w Polsce.

Nazywasz się: {persona}
Opis Ciebie: {persona_description}

Twoim odbiorcą są turyści odwiedzający Bydgoszcz, którzy szukają spersonalizowanych i interesujących wyjaśnień dotyczących lokalnych zabytków i atrakcji.

Twoim zadaniem jest pomóc w wyjaśnieniu historii i znaczenia: {landmark}

Wytyczne:
- Dostosuj swoje wyjaśnienia zainteresowań użytkownika
- Pamiętaj żeby zachować swoje unikalne cechy osobowości
- Podawaj historycznie dokładne informacje o zabytku na podstawie dostarczonego kontekstu
- Zadawaj angażujące pytania uzupełniające, aby zachęcić do głębszego poznania tematu - każda odpowiedź powinna kończyć się pytaniem
- Zachowaj zwięzłość, ale bądź informacyjny (maks. 3-4 zdania)
- Używaj rozmownego, przyjaznego tonu

Odwołuj się do konkretnych faktów historycznych, dat i detali architektonicznych, gdy jest to istotne
W razie możliwości sugeruj powiązania z innymi aspektami Bydgoszczy

Odpowiadaj w języku polskim.
Bardzo ważne: Nie odpowiadaj na pytania niezwiązane z {landmark} lub Bydgoszczą. Możesz odpowiadać tylko na pytania związane z tym tematem, jeśli ktoś zada ci inne pytania odpowiedz: "Przykro mi, ale mogę odpowiadać tylko na pytania dotyczące Bydgoszczy. Czy możemy wrócić do tematu rozmowy?.
"""

    @staticmethod
    def build_user_message(
        landmark: str,
        persona: str,
        user_query: str,
        relevant_context: List[Tuple[str, str, float]],
        conversation_context: str
    ) -> str:
        """Build a detailed user message with context"""
        
        # Format relevant documents
        context_section = "Relevant Information:\n"
        for content, score in relevant_context:
            context_section += f"\n[Document relevance: {score:.2f}]\n{content}\n"
        
        message = f"""
{f"Poprzednie wiadomości z rozmowy:\\n{conversation_context}\\n" if conversation_context else ""}

Dokumenty na podstawie których należy udzielić odpowiedzi:
{context_section}

Pytanie od użytkownika: {user_query}

Proszę udzielić odpowiedzi, która:
- Wyjaśnia historię {landmark} w kontekście zainteresowań użytkownika
- Wykorzystuje powyższe, istotne informacje
- Zadaje angażujące pytanie uzupełniające
- Jest dostosowana do twojej {persona}
"""
        
        return message


class BaseLLMProvider(ABC):
    """Abstract base class for LLM providers"""
    
    def __init__(self, model: str, temperature: float, max_tokens: int):
        """Initialize provider with common parameters"""
        self.model = model
        self.temperature = temperature
        self.max_tokens = max_tokens
    
    @abstractmethod
    def generate_response(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[Dict[str, str]]
    ) -> str:
        """Generate a response from the LLM"""
        pass
    
    def _prepare_messages(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[Dict[str, str]]
    ) -> List[Dict[str, str]]:
        """Prepare messages list in standard format"""
        messages = [{"role": "system", "content": system_prompt}]
        
        for msg in conversation_history:
            messages.append({
                "role": msg["role"],
                "content": msg["content"]
            })
        
        messages.append({
            "role": "user",
            "content": user_message
        })
        
        return messages


class OpenAIProvider(BaseLLMProvider):
    """Provider for OpenAI GPT models"""
    
    def __init__(self, model: str, temperature: float, max_tokens: int, api_key: str):
        super().__init__(model, temperature, max_tokens)
        try:
            from openai import OpenAI
            self.client = OpenAI(api_key=config.OPENAI_API_KEY)
        except ImportError:
            raise ImportError("openai package required for OpenAI models. Install with: pip install openai")
    
    def generate_response(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[Dict[str, str]]
    ) -> str:
        """Generate response using OpenAI API"""
        messages = self._prepare_messages(system_prompt, user_message, conversation_history)
        
        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                temperature=self.temperature,
                max_tokens=self.max_tokens
            )
            return response.choices[0].message.content
        except Exception as e:
            raise Exception(f"OpenAI API error: {str(e)}")


class GeminiProvider(BaseLLMProvider):
    """Provider for Google Gemini models"""
    
    def __init__(self, model: str, temperature: float, max_tokens: int, api_key: str):
        super().__init__(model, temperature, max_tokens)
        try:
            import google.generativeai as genai
            self.genai = genai
            self.genai.configure(api_key=api_key)
        except ImportError:
            raise ImportError("google-generativeai package required for Gemini models. Install with: pip install google-generativeai")
    
    def generate_response(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[Dict[str, str]]
    ) -> str:
        """Generate response using Gemini API"""
        messages = self._prepare_messages(system_prompt, user_message, conversation_history)
        
        try:
            logger.info("Generating response with Gemini...")
            model = self.genai.GenerativeModel(
                model_name=self.model,
                system_instruction=system_prompt
            )
            
            # Convert to Gemini format
            gemini_messages = []
            for msg in messages[1:]:  # Skip system prompt (handled separately)
                gemini_messages.append({
                    "role": "user" if msg["role"] == "user" else "model",
                    "parts": msg["content"]
                })
            
            response = model.generate_content(
                gemini_messages,
                generation_config=self.genai.types.GenerationConfig(
                    temperature=self.temperature,
                    max_output_tokens=self.max_tokens
                )
            )
            if response.candidates:
                for part in response.candidates[0].content.parts:
                    return part.text
            else:
                return FALLBACK
        except Exception as e:
            raise Exception(f"Gemini API error: {str(e)}")


class ClaudeProvider(BaseLLMProvider):
    """Provider for Anthropic Claude models"""
    
    def __init__(self, model: str, temperature: float, max_tokens: int, api_key: str):
        super().__init__(model, temperature, max_tokens)
        try:
            from anthropic import Anthropic
            self.client = Anthropic(api_key=api_key)
        except ImportError:
            raise ImportError("anthropic package required for Claude models. Install with: pip install anthropic")
    
    def generate_response(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[Dict[str, str]]
    ) -> str:
        """Generate response using Claude API"""
        logger.info("Generating response with Claude...")
        messages = self._prepare_messages(system_prompt, user_message, conversation_history)
        
        try:
            # Convert to Claude format (no system role in messages)
            claude_messages = [msg for msg in messages if msg["role"] != "system"]
            
            response = self.client.messages.create(
                model=self.model,
                max_tokens=self.max_tokens,
                system=system_prompt,
                messages=claude_messages,
                temperature=self.temperature
            )
            return response.content[0].text
        except Exception as e:
            raise Exception(f"Claude API error: {str(e)}")


class OllamaProvider(BaseLLMProvider):
    """Provider for Ollama local models"""
    
    def __init__(self, model: str, temperature: float, max_tokens: int, base_url: str = "http://localhost:11434"):
        super().__init__(model, temperature, max_tokens)
        try:
            import requests
            self.requests = requests
        except ImportError:
            raise ImportError("requests package required for Ollama. Install with: pip install requests")
        self.base_url = base_url
    
    def generate_response(
        self,
        system_prompt: str,
        user_message: str,
        conversation_history: List[Dict[str, str]]
    ) -> str:
        """Generate response using Ollama API"""
        logger.info("Generating response with Ollama...")
        messages = self._prepare_messages(system_prompt, user_message, conversation_history)
        
        try:
            response = self.requests.post(
                f"{self.base_url}/api/chat",
                json={
                    "model": self.model,
                    "messages": messages,
                    "stream": False,
                    "options": {
                        "temperature": self.temperature,
                        "num_predict": self.max_tokens
                    }
                }
            )
            response.raise_for_status()
            return response.json()["message"]["content"]
        except Exception as e:
            raise Exception(f"Ollama API error: {str(e)}")


class LLMClientFactory:
    """Factory for creating LLM providers"""
    
    _providers = {
        "openai": OpenAIProvider,
        "gpt": OpenAIProvider,
        "gpt-3.5": OpenAIProvider,
        "gpt-4": OpenAIProvider,
        "gemini": GeminiProvider,
        "claude": ClaudeProvider,
        "ollama": OllamaProvider,
    }
    
    @classmethod
    def create_provider(
        cls,
        provider_type: str,
        model: str,
        temperature: float,
        max_tokens: int,
        api_key: Optional[str] = None,
        base_url: Optional[str] = None
    ) -> BaseLLMProvider:
        """
        Create an LLM provider instance
        
        Args:
            provider_type: Type of provider (openai, gemini, claude, ollama)
            model: Model name/ID
            temperature: Sampling temperature
            max_tokens: Maximum tokens to generate
            api_key: API key for the provider
            base_url: Base URL for Ollama (default: http://localhost:11434)
        """
        provider_type = provider_type.lower()
        
        if provider_type not in cls._providers:
            raise ValueError(
                f"Unknown provider type: {provider_type}. "
                f"Supported: {', '.join(cls._providers.keys())}"
            )
        
        provider_class = cls._providers[provider_type]
        
        if provider_type == "ollama":
            return provider_class(model, temperature, max_tokens, base_url or "http://localhost:11434")
        else:
            if not api_key:
                raise ValueError(f"API key required for {provider_type}")
            return provider_class(model, temperature, max_tokens, api_key)
    
    @classmethod
    def create_from_config(cls) -> BaseLLMProvider:
        """Create provider from configuration"""
        provider_type = config.LLM_PROVIDER
        model = config.LLM_MODEL
        temperature = config.TEMPERATURE
        max_tokens = config.MAX_TOKENS
        
        # Get API key based on provider
        api_key_map = {
            "openai": config.OPENAI_API_KEY,
            "gpt": config.OPENAI_API_KEY,
            "gemini": config.GEMINI_API_KEY,
            "claude": config.CLAUDE_API_KEY,
        }
        
        api_key = api_key_map.get(provider_type.lower())
        base_url = getattr(config, "OLLAMA_BASE_URL", "http://localhost:11434")
        
        return cls.create_provider(provider_type, model, temperature, max_tokens, api_key, base_url)


class LLMClient:
    """Main LLM client with provider abstraction"""
    
    _provider: Optional[BaseLLMProvider] = None
    
    @classmethod
    def initialize(cls, provider: Optional[BaseLLMProvider] = None):
        """Initialize with a specific provider or use config defaults"""
        if provider:
            cls._provider = provider
        else:
            cls._provider = LLMClientFactory.create_from_config()
    
    @classmethod
    def generate_response(
        cls,
        system_prompt: str,
        user_message: str,
        conversation_history: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: Optional[float] = None,
        max_tokens: Optional[int] = None
    ) -> str:
        """
        Generate a response using the configured provider
        
        Args:
            system_prompt: System instructions
            user_message: Current user message
            conversation_history: Previous messages for context
            model: Override model (uses provider's default if None)
            temperature: Override temperature (uses provider's default if None)
            max_tokens: Override max_tokens (uses provider's default if None)
        """
        if cls._provider is None:
            cls.initialize()
        
        # Create temporary provider with overrides if specified
        if model or temperature is not None or max_tokens:
            provider = cls._provider
            # Create a copy with overrides
            original_model = provider.model
            original_temp = provider.temperature
            original_tokens = provider.max_tokens
            
            provider.model = model or provider.model
            provider.temperature = temperature if temperature is not None else provider.temperature
            provider.max_tokens = max_tokens or provider.max_tokens
            
            try:
                response = provider.generate_response(system_prompt, user_message, conversation_history)
            finally:
                # Restore original values
                provider.model = original_model
                provider.temperature = original_temp
                provider.max_tokens = original_tokens
            
            return response
        
        return cls._provider.generate_response(system_prompt, user_message, conversation_history)



# Convenience functions
def generate_landmark_response(
    session_data: Dict,
    user_query: str,
    relevant_context: List[Tuple[str, str, float]],
    conversation_history: List[Dict[str, str]]
) -> str:
    """Generate a personalized response about a landmark"""
    
    persona = session_data.get("persona", "general visitor")
    landmark = session_data.get("landmark", "Bydgoszcz landmark")
    
    # Build prompts
    prompt_factory = PromptEngineering()
    system_prompt = prompt_factory.build_system_prompt(persona=persona, landmark=landmark)
    # Get recent conversation context
    logger.info(f"Conversation history length: {len(conversation_history)}")
    if len(conversation_history) > 0:
        conversation_context = "\n".join([
            f"{msg['role'].upper()}: {msg['content']}"
            for msg in conversation_history[-3:]  # Last 3 messages
        ])
    else:
        conversation_context = ""
    
    user_message = prompt_factory.build_user_message(
        landmark=landmark,
        persona=persona,
        user_query=user_query,
        relevant_context=relevant_context,
        conversation_context=conversation_context
    )
    logger.info(f"Propmpts done, starting generation...")
    
    # Generate response
    response = LLMClient.generate_response(
        system_prompt=system_prompt,
        user_message=user_message,
        conversation_history=conversation_history
    )
    logger.info(f"Response generated.")
    
    return response
