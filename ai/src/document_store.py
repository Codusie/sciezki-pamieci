"""
Document vectorization and retrieval system
Converts landmark documents into vectors for semantic search
"""

import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from typing import List, Dict, Tuple


class DocumentStore:
    """Stores and manages documents with vector embeddings"""
    
    def __init__(self):
        self.documents: Dict[str, str] = {}  # landmark_name -> document_text
        self.vectorizer = None
        self.vectors = None
        self.landmark_names = []
        
    def add_document(self, landmark_name: str, content: str) -> None:
        """Add a document for a landmark"""
        self.documents[landmark_name] = content
        self._rebuild_vectors()
        
    def add_documents(self, documents: Dict[str, str]) -> None:
        """Add multiple documents at once"""
        self.documents.update(documents)
        self._rebuild_vectors()
        
    def _rebuild_vectors(self) -> None:
        """Rebuild TF-IDF vectors for all documents"""
        if not self.documents:
            return
            
        self.landmark_names = list(self.documents.keys())
        texts = [self.documents[name] for name in self.landmark_names]
        
        self.vectorizer = TfidfVectorizer(max_features=500, stop_words='english')
        self.vectors = self.vectorizer.fit_transform(texts)
        
    def get_document(self, landmark_name: str) -> str:
        """Get the full document for a landmark"""
        return self.documents.get(landmark_name, "")
    
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
            landmark_name = self.landmark_names[idx]
            content = self.documents[landmark_name]
            score = float(similarities[idx])
            results.append((landmark_name, content, score))
            
        return results


# Global document store instance
document_store = DocumentStore()
