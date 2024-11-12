```bash
+-------------------+         +------------------+       +-----------------------+      +-------------------------+
|   Frontend        |         |    API Gateway   |       |  Main Lambda Function |      |      SageMaker          |
|   (React)         |--POST-->|                  |------>|                       |----->| - LegalBERT model       |
| - User interface  |         | - Routes to      |       | - Calls SageMaker     |      | - Processes text data   |
| - Sends POST req. |         |   Lambda         |       | - Returns response    |      | - Returns results       |
+-------------------+         +------------------+       +-----------------------+      +-----------|-------------+
                                                                                                    |
                                                                                                    |
                                                                                                    |
                                                                                                    v
                                +----------------------------------------------------------------------------------+
                                |            Receives processed data from SageMaker and sends it                   |
                                |                         back to the frontend                                     |
                                +----------------------------------------------------------------------------------+



                                 +--------------------------+                  +----------------------------+
                                 |       EventBridge        |<-----------------| Secondary Lambda           |
                                 | - Syncs Lambda functions |                  | - Monitors SageMaker       |
                                 | - 15-min idle timer to   |                  |   endpoint usage           |
                                 |   manage SageMaker       |                  | - Deletes endpoint if      |
                                 +--------------------------+                  |   idle > 15 minutes        |
                                                                               | - Rebuilds endpoint when   |
                                                                               |   new requests are made    |
                                                                               +----------------------------+


```
