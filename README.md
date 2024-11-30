# Legal-BERT Congressional Text Analysis Application Architecture

The project focuses on improving the alignment of LegalBERT—a specialized transformer-based model pre-trained on legal texts—with human reasoning and decision-making processes. LegalBERT is particularly adept at understanding and analyzing legislative documents, bills, and laws. However, the objective here is to refine the model using Reinforcement Learning with Human Feedback (RLHF) to ensure that its outputs align better with human ethical and contextual interpretations.

```
┌──────────────────────────────────────────────────────────────────┐
│                           User's Browser                         │
│                                                                  │
│  ┌──────────────────────────┐    React Components                │
│  │     React Frontend       │    ┌─────────────────────┐         │
│  │                         │     │  - TextAnalyzer     │         │
│  │  Congressional Text     │     │  - ResultDisplay    │         │
│  │  Analysis Interface     │     │  - Overview         │         │
│  │                         │     │  - Research         │         │
│  └───────────┬──────────────┘    └─────────────────────┘         │
└──────────────┼───────────────────────────────────────────────────┘
               │
               │ HTTPS
               ▼
┌──────────────────────────┐
│    API Gateway           │
│    (AWS)                 │
│                          │
└───────────┬──────────────┘
            │
            │ Trigger
            ▼
┌──────────────────────────┐
│    Lambda Function       │
│    - Handles requests    │
│    - Routes to EC2       │
│                          │
└───────────┬──────────────┘
            │
            │ Internal AWS Network
            ▼
┌──────────────────────────────────────────────────┐
│    EC2 Instance                                  │
│    ┌─────────────────────┐ ┌──────────────────┐  │
│    │  Python FastAPI     │ │  Legal-BERT      │  │
│    │  Server             │ │  Model           │  │
│    │  (server.py)        │─▶│  - Tokenizer    │  │
│    │                     │ │  - Classifier    │  │
│    └─────────────────────┘ └──────────────────┘  │
│                │                   ▲             │
│                │                   │             │
│                ▼                   │             │
│    ┌─────────────────────┐         │             │
│    │  EFS Mount          │         │             │
│    │  - Model Files      │─────────┘             │
│    │  - Label Mappings   │                       │
│    └─────────────────────┘                       │
└──────────────────────────────────────────────────┘
```

## Data Flow
1. User enters text → React Frontend
2. Frontend sends POST request → API Gateway
3. API Gateway triggers → Lambda Function
4. Lambda routes request → EC2 Instance
5. FastAPI processes request using Legal-BERT Model
6. Response flows back through the stack
7. Frontend displays classification results

## Key Components

### Frontend (React):
```
├── Components
│   ├── TextAnalyzer (Text input & submission)
│   ├── ResultDisplay (Shows predictions)
│   ├── Overview (Tool description)
│   └── Research (Research information)
└── API Integration
```

### Backend:
```
├── API Gateway (REST API endpoint)
├── Lambda Function (Request handler)
└── EC2 Instance
    ├── FastAPI Server
    ├── Legal-BERT Model
    └── EFS Storage
        ├── Model Files
        └── Label Mappings
```
