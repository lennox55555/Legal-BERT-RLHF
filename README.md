┌─────────────────────────────────────────────────────────────────────┐
│                           User's Browser                            │
│                                                                     │
│  ┌──────────────────────────┐    React Components                  │
│  │     React Frontend       │    ┌─────────────────────┐           │
│  │                         │    │  - TextAnalyzer     │           │
│  │  Congressional Text     │    │  - ResultDisplay    │           │
│  │  Analysis Interface     │    │  - Overview         │           │
│  │                         │    │  - Research         │           │
│  └───────────┬──────────────┘    └─────────────────────┘           │
└──────────────┼──────────────────────────────────────────────────────┘
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
│                │                    ▲             │
│                │                    │             │
│                ▼                    │             │
│    ┌─────────────────────┐         │             │
│    │  EFS Mount          │         │             │
│    │  - Model Files      │─────────┘             │
│    │  - Label Mappings   │                       │
│    └─────────────────────┘                       │
└──────────────────────────────────────────────────┘

Data Flow:
1. User enters text → React Frontend
2. Frontend sends POST request → API Gateway
3. API Gateway triggers → Lambda Function
4. Lambda routes request → EC2 Instance
5. FastAPI processes request using Legal-BERT Model
6. Response flows back through the stack
7. Frontend displays classification results
