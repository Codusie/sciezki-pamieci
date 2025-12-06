# Adding Your Landmark Documents

This guide explains how to add your own landmark information to the Bydgoszcz LLM Tour Guide API.

## Overview

The API uses a document vectorization system that converts your landmark descriptions into searchable vectors. This allows the system to find relevant information for any user query and tailor responses based on persona.

## File Location

All landmark documents are defined in: **`sample_documents.py`**

## Current Structure

The file contains a Python dictionary called `SAMPLE_DOCUMENTS`:

```python
SAMPLE_DOCUMENTS = {
    "Landmark Name": """
    Multi-line description of the landmark
    covering history, architecture, cultural significance, etc.
    """,
    "Another Landmark": """
    More landmark information...
    """
}
```

## How to Add Landmarks

### Step 1: Edit sample_documents.py

Open the file in your text editor:

```bash
nano sample_documents.py
```

### Step 2: Add Your Landmark Entry

Add a new entry to the `SAMPLE_DOCUMENTS` dictionary:

```python
SAMPLE_DOCUMENTS = {
    # ... existing landmarks ...
    
    "Your New Landmark": """
    Detailed historical information about your landmark.
    Include multiple paragraphs covering:
    - When it was built
    - Who built it
    - Architectural style
    - Historical significance
    - Cultural importance
    - Notable events
    - Recent changes or restorations
    """,
    
    # ... more landmarks ...
}
```

### Step 3: Save and Restart

1. Save the file
2. Restart the Flask server:

```bash
# Press Ctrl+C to stop the current server
# Then restart it:
python app.py
```

3. Verify with the API:

```bash
curl http://localhost:5000/landmarks
```

You should see your new landmark in the list.

## Guidelines for Writing Landmark Descriptions

For best results, follow these guidelines:

### Content Guidelines

1. **Comprehensive**: Include 3-4 substantial paragraphs
2. **Historical**: Add dates, names, and specific events
3. **Architectural**: Describe the style, materials, and distinctive features
4. **Cultural**: Explain significance to the city and its people
5. **Contemporary**: Mention current use or recent renovations

### Format Best Practices

```python
"Landmark Full Name": """
First Paragraph: Introduction and basic facts
- Year built or established
- Main purpose when created
- Original name if different

Second Paragraph: Historical context
- Key historical events
- Important dates
- Influential people involved
- How it shaped the city

Third Paragraph: Architecture and design
- Architectural style (Gothic, Baroque, Art Nouveau, etc.)
- Notable features and characteristics
- Building materials
- Any unique design elements

Fourth Paragraph: Modern significance
- Current use
- Recent renovations or restorations
- Cultural events held here
- Why it matters to residents and visitors
"""
```

### Example: Good Landmark Description

```python
"City Hall": """
The Bydgoszcz City Hall (Ratusz Miejski) is a stunning example of Renaissance architecture 
located in the heart of the Old Town. Built in the 16th century (1564-1572), it served as 
the center of municipal administration and remains an iconic symbol of Bydgoszcz's civic pride. 
The building was constructed with red brick and features characteristic Renaissance elements.

During its long history, the City Hall witnessed many significant events in Bydgoszcz's 
development. It survived numerous conflicts and wars, including World War II, though it 
suffered considerable damage that required extensive post-war reconstruction. The building 
represents the city's resilience and commitment to preserving its cultural heritage.

The architecture is particularly notable for its ornate decorations, symmetrical facade, 
and the distinctive tower that serves as a landmark visible from many parts of the city. 
The tower clock has become a symbolic element of Bydgoszcz's identity. The interior contains 
period rooms and exhibition spaces that showcase the city's history.

Today, the City Hall functions both as a cultural monument and an administrative center. 
It hosts various exhibitions and cultural events throughout the year, attracting thousands 
of visitors. The building has been carefully restored multiple times to maintain its grandeur 
while making it accessible to modern visitors. The surrounding Old Town square is now a vibrant 
center for commerce, dining, and cultural activities.
"""
```

## Length and Scope

**Recommended length**: 300-500 words per landmark (approximately 3-4 substantial paragraphs)

**Why?** 
- Provides enough detail for semantic search to find relevant information
- Allows the LLM to generate diverse responses
- Still concise enough for quick processing
- Balances comprehensiveness with specificity

## Organizing Multiple Landmarks

For a comprehensive tour guide, organize landmarks by category:

```python
# Historic Religious Sites
"Cathedral Basilica of Our Lady": """...""",
"Church of Saint Martin": """...""",

# Industrial Heritage
"Leandro's Mill": """...""",
"Grain Storage Complex": """...""",

# Public Infrastructure
"Water Canal": """...""",
"Railway Station": """...""",

# Cultural Institutions
"Museum of Bydgoszcz": """...""",
"Opera House": """...""",

# Historic Residences
"Paca Palace": """...""",
"Merchant Houses": """...""",
```

## SEO-Friendly Content Tips

The document retrieval uses semantic search. To improve findability:

1. **Use specific terms**: Include architectural terms, historical periods, dates
2. **Varied vocabulary**: Repeat key concepts in different ways
3. **Detailed facts**: Numbers, names, and dates improve search results
4. **Cross-references**: Mention connections to other landmarks
5. **Rich adjectives**: Use descriptive language that captures essence

### Good vs. Poor Examples

❌ **Poor**: "The cathedral is old and important."

✅ **Good**: "The Cathedral Basilica of Our Lady, constructed between 1480-1520, represents 
late Gothic architecture with Renaissance influences. Its twin towers reach 87 meters and 
dominate the Bydgoszcz skyline. Built during the reign of Polish rulers, it served as the 
spiritual center for generations of faithful."

## Integrating Personas

The system automatically tailors responses to different personas. Your descriptions should 
serve multiple interests:

```python
"Landmark Name": """
[For historians]
- Specific dates, names, historical context

[For architects]
- Architectural style, materials, design features

[For art enthusiasts]
- Artistic elements, decorations, cultural significance

[For general tourists]
- Location, accessibility, visiting information, highlights

[For students]
- Educational value, key concepts, learning opportunities
"""
```

## Testing Your Landmarks

After adding landmarks, test them:

### 1. Verify they appear in the list
```bash
curl http://localhost:5000/landmarks
```

### 2. Send test queries
```bash
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "persona": "history enthusiast",
    "landmark": "Your New Landmark",
    "query": "Tell me about the history"
  }'
```

### 3. Try different personas
```bash
# Test as architect
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "persona": "architect",
    "landmark": "Your New Landmark",
    "query": "What is the architectural style?"
  }'

# Test as student
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "persona": "student",
    "landmark": "Your New Landmark",
    "query": "Why is this landmark important?"
  }'
```

## Updating Existing Landmarks

To modify a landmark description:

1. Open `sample_documents.py`
2. Find the landmark in `SAMPLE_DOCUMENTS`
3. Edit the description text
4. Save the file
5. Restart Flask server

Changes take effect immediately after restart.

## Removing Landmarks

To remove a landmark:

1. Open `sample_documents.py`
2. Delete the entire entry (including the key and value)
3. Save the file
4. Restart Flask server

Example - removing a landmark:
```python
# Before
SAMPLE_DOCUMENTS = {
    "Landmark 1": """...""",
    "Landmark to Remove": """...""",  # Remove this entire line
    "Landmark 2": """...""",
}

# After
SAMPLE_DOCUMENTS = {
    "Landmark 1": """...""",
    "Landmark 2": """...""",
}
```

## Bulk Import from External Sources

If you have documents from external sources:

### 1. Create a helper script

```python
import json
import re

# Load from JSON file
with open('landmarks.json') as f:
    landmarks = json.load(f)

# Convert to Python dictionary
python_dict = "SAMPLE_DOCUMENTS = {\n"
for name, description in landmarks.items():
    python_dict += f'    "{name}": """{description}""",\n'
python_dict += "}"

print(python_dict)
```

### 2. Apply to sample_documents.py

Copy the output and paste into `sample_documents.py`

## Markdown to Python Script

If you have landmarks in Markdown:

```python
import re

markdown_file = "landmarks.md"
with open(markdown_file) as f:
    content = f.read()

# Parse markdown headings as landmark names
landmarks = re.split(r'^## ', content, flags=re.MULTILINE)[1:]

sample_docs = {}
for landmark_section in landmarks:
    lines = landmark_section.split('\n', 1)
    name = lines[0].strip()
    description = lines[1].strip() if len(lines) > 1 else ""
    sample_docs[name] = description

# Print as Python code
print("SAMPLE_DOCUMENTS = {")
for name, desc in sample_docs.items():
    print(f'    "{name}": """{desc}""",')
print("}")
```

## Best Practices Checklist

Before deploying with new landmarks:

- [ ] Verified spelling and grammar
- [ ] Included specific dates and names
- [ ] Added architectural/cultural details
- [ ] Tested with different personas
- [ ] Confirmed landmark appears in `/landmarks` endpoint
- [ ] Tested API responses for the new landmark
- [ ] Updated any frontend documentation
- [ ] Verified all commas and quotes are correct in Python

## Troubleshooting

### "Landmark not found" error
- Check exact spelling matches `SAMPLE_DOCUMENTS` key
- Use `/landmarks` endpoint to verify the name
- Restart Flask server after editing

### Syntax error when starting server
- Check for missing commas between entries
- Verify all quotes are balanced
- Use Python linter: `python -m py_compile sample_documents.py`

### Responses don't mention landmark details
- Ensure description is substantial enough
- Add more specific, searchable terms
- Restart server to reload documents

## Example: Complete Landmark Entry

Here's a complete, production-ready example:

```python
"Okol Church": """
The Okol Church (Kościół św. Marty) is an important religious monument located in the 
Okol district of Bydgoszcz, one of the oldest residential areas in the city. Built in 
the 15th century (1420-1450), it represents fine examples of late Gothic architecture 
characteristic of northern Polish churches. The structure features a distinctive nave 
with a single tower and ornate brick detailing typical of the period.

Throughout the 16th and 17th centuries, the church underwent several renovations and 
additions. The interior was decorated with Renaissance and later Baroque elements, 
reflecting the evolving artistic styles of the era. The church served as the spiritual 
center for the Okol community for centuries, hosting important religious ceremonies 
and local celebrations. Its graveyard contains tombstones of prominent Bydgoszcz families.

The architecture showcases typical elements of Prussian Gothic, including the pointed 
arch windows, ribbed vault ceiling, and decorative brick work. The church tower, 
standing at approximately 45 meters, is visible across much of the Okol district. 
Inside, visitors can observe original wooden pews and an ornate altar dating back 
several centuries. The acoustics of the nave are notable and have made it a venue 
for classical music concerts.

Today, Okol Church remains an active parish church while also serving as a cultural 
monument open to visitors. Recent restoration projects have carefully preserved its 
historical features while improving accessibility. The church is surrounded by charming 
period streets and historic merchant houses, making it a central point in the Okol 
heritage tour. It continues to host religious services, weddings, and cultural events 
that attract both residents and tourists interested in Bydgoszcz's religious heritage.
"""
```

## Next Steps

1. ✅ Add all your landmark documents to `sample_documents.py`
2. ✅ Restart the Flask server
3. ✅ Test with the client: `python client.py --mode demo`
4. ✅ Verify all landmarks work with various personas
5. ✅ Deploy your API with complete landmark data

Happy documenting! 🏛️
