"""
Document vectorization and retrieval system
Converts landmark documents into vectors for semantic search
"""

import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from typing import List, Dict, Tuple
import pandas as pd
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class DocumentStore:
    """Stores and manages documents with vector embeddings"""
    
    def __init__(self):
        self.landmarks: Dict[str, str] = {}                # landmark_name -> document_text - initial info about landmark
        self.historical_info: str[str] = []                      # tour guide dumps
        self.documents: str[str] = []
        self.vectorizer = None
        self.vectors = None
        
        
    def add_documents(self, documents_csv: str=None, historical_info_txt: str=None) -> None:
        """Add multiple documents at once"""
        if documents_csv is None and historical_info is None:
            logger.info('No documents provided to add.')
            return
        
        if documents_csv:
            landmarks = pd.read_csv(documents_csv)
            landmarks = list(zip(landmarks['Nazwa punktu'], landmarks['Nazwa punktu']))
            self.landmarks = {k:v for k, v in landmarks}
            logger.info(f'Added {len(self.landmarks)} landmark documents from CSV.')

        if historical_info_txt:
            historical_info = []
            with open(historical_info_txt, 'r', encoding='utf-8') as f:
                for line in f.readlines():
                    if len(line.strip()) == 0:
                        continue
                    historical_info += [line.strip()]
            self.historical_info = historical_info
            logger.info(f'Added {len(self.historical_info)} historical documents from text file.')
        
        self.documents = [f'Obiekt: {name}\nOpis:{description}' \
                          for name, description in self.landmarks.items()] + \
                         self.historical_info
        self._rebuild_vectors()
        
    def _rebuild_vectors(self) -> None:
        """Rebuild TF-IDF vectors for all documents"""
        if not self.documents:
            return
            
        texts = self.documents
        self.vectorizer = TfidfVectorizer(max_features=1000)
        self.vectors = self.vectorizer.fit_transform(texts)
        logger.info('Rebuilt document vectors.')
        
    def get_landmark_description(self, landmark_name: str) -> str:
        """Get the full description for a landmark"""
        return self.landmarks.get(landmark_name, "")
    
    def retrieve_relevant_context(self, query: str, top_k: int = 3) -> List[Tuple[str, str, float]]:
        """
        Retrieve the most relevant documents based on query
        Returns: List of (landmark_name, content, similarity_score)
        """
        if not self.vectorizer or self.vectors is None:
            return []
            
        query_vector = self.vectorizer.transform([query])
        similarities = cosine_similarity(query_vector, self.vectors)[0]
        
        # Get top k indices
        top_indices = np.argsort(similarities)[::-1][:top_k]
        
        results = []
        for idx in top_indices:
            content = self.documents[idx]
            score = float(similarities[idx])
            results.append((content, score))
            
        return results


# Global document store instance
document_store = DocumentStore()
