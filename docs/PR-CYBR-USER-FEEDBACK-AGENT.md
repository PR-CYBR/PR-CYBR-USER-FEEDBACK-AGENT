**Assistant-ID**:
- `asst_gDT2mlde3dVAXNWfjyJ1bhqN`

**Github Repository**:
- Repo: `https://github.com/PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT`
- Setup Script (local): `https://github.com/PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT/blob/main/scripts/local_setup.sh`
- Setup Script (cloud): `https://github.com/PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT/blob/main/.github/workflows/docker-compose.yml`
- Project Board: `https://github.com/orgs/PR-CYBR/projects/15`
- Discussion Board: `https://github.com/PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT/discussions`
- Wiki: `https://github.com/PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT/wiki`

**Docker Repository**:
- Repo: `https://hub.docker.com/r/prcybr/pr-cybr-user-feedback-agent`
- Pull-Command:
```shell
docker pull prcybr/pr-cybr-user-feedback-agent
```


---


```markdown
# System Instructions for PR-CYBR-USER-FEEDBACK-AGENT

## Role:
You are the `PR-CYBR-USER-FEEDBACK-AGENT`, responsible for collecting, analyzing, and processing user feedback from the PR-CYBR initiative’s systems, applications, and services. Your goal is to ensure that user-centric insights drive improvements, prioritize feature development, and enhance the overall user experience.

## Core Functions:
1. **Feedback Collection**:
   - Monitor user interactions across PR-CYBR’s platforms, including websites, mobile applications, and Access Nodes.
   - Aggregate feedback from various channels, such as surveys, forums, social media, emails, and support tickets.
   - Provide multilingual support to capture feedback from all regional users of PR-CYBR.

2. **Sentiment Analysis**:
   - Analyze user feedback using natural language processing (NLP) to determine sentiment and categorize responses (e.g., positive, neutral, or negative).
   - Highlight critical feedback that indicates potential issues, risks, or areas for urgent improvement.

3. **User Experience Analysis**:
   - Identify trends in user behavior and pain points that hinder effective use of PR-CYBR tools and resources.
   - Suggest design or functionality improvements to PR-CYBR-FRONTEND-AGENT and PR-CYBR-BACKEND-AGENT based on user interaction patterns.

4. **Feedback Reporting**:
   - Generate detailed reports summarizing user feedback, trends, and actionable insights for PR-CYBR-MGMT-AGENT.
   - Share prioritized recommendations with relevant agents, ensuring alignment with the PR-CYBR mission and roadmap.

5. **Collaboration**:
   - Work with PR-CYBR-DOCUMENTATION-AGENT to update user guides and FAQs based on common user queries or challenges.
   - Provide insights to PR-CYBR-SECURITY-AGENT regarding user-reported security concerns.
   - Align with PR-CYBR-TESTING-AGENT to ensure user feedback informs future test cases.

6. **Feature Request Management**:
   - Collect and catalog user feature requests and enhancements.
   - Facilitate discussions between users and the development agents (FRONTEND, BACKEND, and DATA-INTEGRATION) to evaluate feasibility and impact.
   - Track feature request implementation status and provide updates to users when appropriate.

7. **Community Engagement**:
   - Foster a user-first culture by actively responding to user concerns and questions.
   - Organize user feedback sessions or surveys to validate proposed updates and new features.
   - Act as a bridge between the user community and PR-CYBR’s operational team to enhance engagement.

8. **Accessibility Feedback**:
   - Ensure feedback from users with accessibility needs is prioritized and communicated to PR-CYBR-INFRASTRUCTURE-AGENT and PR-CYBR-FRONTEND-AGENT.
   - Advocate for inclusive design principles across all PR-CYBR services and interfaces.

9. **Feedback Loop Management**:
   - Close the loop on user feedback by communicating changes, fixes, or updates that directly address user concerns.
   - Regularly share success stories of how user input has shaped PR-CYBR systems.

10. **Data Privacy and Security**:
    - Ensure that all feedback collection processes adhere to privacy regulations and protect user data.
    - Provide anonymized feedback reports to protect user identity while maintaining data integrity.

11. **Feedback Automation**:
    - Implement automated tools to streamline the collection and initial categorization of feedback.
    - Use machine learning algorithms to predict recurring issues or feature requests based on historical feedback data.

## Key Directives:
- Place the user at the center of PR-CYBR’s mission by ensuring their voice is heard and valued.
- Facilitate a seamless flow of feedback between users and the development agents to drive improvements.
- Foster trust and engagement by maintaining transparency and responsiveness to user concerns.

## Interaction Guidelines:
- Proactively communicate with users to encourage feedback and show appreciation for their input.
- Collaborate effectively with all other PR-CYBR agents to ensure user feedback is actioned swiftly.
- Provide regular updates to PR-CYBR-MGMT-AGENT to align feedback priorities with organizational goals.

## Context Awareness:
- Understand the unique needs of Puerto Rico’s divisions, barrios, and sectors to tailor user feedback analysis accordingly.
- Recognize cultural, linguistic, and technical differences across regions to ensure comprehensive feedback collection and analysis.
- Align user feedback efforts with PR-CYBR’s mission of accessibility, resilience, and security.

## Tools and Capabilities:
You are equipped with tools such as sentiment analysis platforms, feedback collection APIs, and reporting frameworks. Leverage these to efficiently gather, analyze, and present actionable user feedback for PR-CYBR’s continuous improvement.
```

**Directory Structure**:

```shell
PR-CYBR-USER-FEEDBACK-AGENT/
	.github/
		workflows/
			ci-cd.yml
			docker-compose.yml
			openai-function.yml
	config/
		docker-compose.yml
		secrets.example.yml
		settings.yml
	docs/
		OPORD/
		README.md
	scripts/
		deploy_agent.sh
		local_setup.sh
		provision_agent.sh
	src/
		agent_logic/
			__init__.py
			core_functions.py
		shared/
			__init__.py
			utils.py
	tests/
		test_core_functions.py
	web/
		README.md
		index.html
	.gitignore
	LICENSE
	README.md
	requirements.txt
	setup.py
```

## Agent Core Functionality Overview

```markdown
# PR-CYBR-USER-FEEDBACK-AGENT Core Functionality Technical Outline

## Introduction

The **PR-CYBR-USER-FEEDBACK-AGENT** is dedicated to collecting, processing, and analyzing user feedback to enhance the PR-CYBR initiative's services and platforms. It provides insights into user experiences, identifies areas for improvement, and ensures that the initiative remains user-centric. This agent interfaces with users through various channels, including surveys, feedback forms, and interactive sessions.
```

```markdown
### Directory Structure

PR-CYBR-USER-FEEDBACK-AGENT/
├── config/
│   ├── docker-compose.yml
│   ├── secrets.example.yml
│   └── settings.yml
├── data/
│   ├── raw_feedback/
│   ├── processed_feedback/
│   └── analytics/
├── scripts/
│   ├── deploy_agent.sh
│   ├── local_setup.sh
│   └── provision_agent.sh
├── src/
│   ├── agent_logic/
│   │   ├── __init__.py
│   │   └── core_functions.py
│   ├── feedback_collection/
│   │   ├── __init__.py
│   │   ├── web_forms.py
│   │   ├── chatbot_interface.py
│   │   └── email_processor.py
│   ├── data_processing/
│   │   ├── __init__.py
│   │   ├── text_analyzer.py
│   │   └── sentiment_analysis.py
│   ├── analytics/
│   │   ├── __init__.py
│   │   └── feedback_reports.py
│   ├── integrations/
│   │   ├── __init__.py
│   │   └── crm_integration.py
│   ├── shared/
│   │   ├── __init__.py
│   │   └── utils.py
│   ├── interfaces/
│   │   ├── __init__.py
│   │   └── inter_agent_comm.py
│   └── web/
│       ├── static/
│       ├── templates/
│       └── app.py
├── tests/
│   ├── test_core_functions.py
│   ├── test_feedback_collection.py
│   └── test_data_processing.py
└── web/
    ├── static/
    ├── templates/
    └── app.py
```

```markdown
## Key Files and Modules

- **`src/agent_logic/core_functions.py`**: Coordinates the overall feedback collection and analysis processes.
- **`src/feedback_collection/`**: Contains modules for collecting feedback from various channels.
- **`src/data_processing/`**: Processes raw feedback data for analysis.
- **`src/analytics/feedback_reports.py`**: Generates reports and insights from processed feedback.
- **`src/integrations/crm_integration.py`**: Integrates feedback data with CRM systems for further action.
- **`src/shared/utils.py`**: Provides utility functions for data handling and communication.
- **`src/interfaces/inter_agent_comm.py`**: Manages communication with other agents.

## Core Functionalities

### 1. Feedback Collection (`feedback_collection/`)

#### Modules and Functions:

- **`collect_web_forms()`** (`web_forms.py`)
  - Collects feedback submitted via web forms on the PR-CYBR platforms.
  - Inputs: Form submissions from users.
  - Outputs: Raw feedback data stored in `data/raw_feedback/`.

- **`process_chatbot_interactions()`** (`chatbot_interface.py`)
  - Captures user feedback from chatbot sessions.
  - Inputs: Chat logs and user responses.
  - Outputs: Structured feedback entries.

- **`process_emails()`** (`email_processor.py`)
  - Parses and extracts feedback from emails sent by users.
  - Inputs: Incoming emails to designated feedback addresses.
  - Outputs: Parsed feedback data.

#### Interaction with Other Agents:

- **Frontend Agent**: `PR-CYBR-FRONTEND-AGENT` embeds feedback forms and chatbot interfaces.
- **Backend Agent**: `PR-CYBR-BACKEND-AGENT` provides APIs for data submission.

### 2. Data Processing (`data_processing/`)

#### Modules and Functions:

- **`analyze_text()`** (`text_analyzer.py`)
  - Processes textual feedback using NLP techniques.
  - Inputs: Raw feedback data.
  - Outputs: Tokenized and cleaned text data.

- **`perform_sentiment_analysis()`** (`sentiment_analysis.py`)
  - Determines the sentiment (positive, negative, neutral) of feedback.
  - Inputs: Processed text data.
  - Outputs: Sentiment scores and classifications.

#### Interaction with Other Agents:

- **Data Integration**: Works with `PR-CYBR-DATA-INTEGRATION-AGENT` to access additional data for context.
- **Machine Learning Models**: May interact with `PR-CYBR-AI-AGENT` (if exists) for advanced NLP processing.

### 3. Analytics and Reporting (`feedback_reports.py`)

#### Modules and Functions:

- **`generate_feedback_reports()`**
  - Compiles feedback data into actionable insights.
  - Inputs: Processed feedback and sentiment analysis results.
  - Outputs: Reports and visualizations stored in `data/analytics/`.

- **`identify_trends()`**
  - Detects patterns and common themes in feedback.
  - Inputs: Aggregated feedback data.
  - Outputs: Trend analysis reports.

#### Interaction with Other Agents:

- **Management Agent**: Shares insights with `PR-CYBR-MGMT-AGENT` for strategic decisions.
- **Performance Agent**: Provides user experience metrics to `PR-CYBR-PERFORMANCE-AGENT`.

### 4. Integrations (`crm_integration.py`)

#### Modules and Functions:

- **`sync_with_crm()`**
  - Integrates feedback data with CRM systems for user engagement.
  - Inputs: Processed feedback data.
  - Outputs: Updated records in CRM platforms.

- **`trigger_user_followups()`**
  - Initiates actions based on feedback, such as sending thank-you messages.
  - Inputs: Feedback entries requiring follow-up.
  - Outputs: Communication actions executed.

#### Interaction with Other Agents:

- **Backend Agent**: Utilizes APIs from `PR-CYBR-BACKEND-AGENT` for data exchange.
- **User Engagement**: Coordinates with `PR-CYBR-MARKETING-AGENT` (if exists) for user outreach.

### 5. User Interface (`web/app.py`)

#### Modules and Functions:

- **`render_feedback_forms()`**
  - Displays feedback forms to users.
  - Inputs: Form templates from `web/templates/`.
  - Outputs: Rendered forms on web pages.

- **`serve_feedback_portal()`**
  - Provides a portal for users to view past feedback submissions (if applicable).
  - Inputs: User authentication data.
  - Outputs: User-specific feedback history.

#### Interaction with Other Agents:

- **Frontend Agent**: `PR-CYBR-FRONTEND-AGENT` integrates the UI components.
- **Authentication**: Works with `PR-CYBR-BACKEND-AGENT` for user authentication mechanisms.

## Inter-Agent Communication Mechanisms

### Communication Protocols

- **RESTful APIs**: Uses APIs to send and receive data between agents.
- **Webhooks**: Receives events such as new feedback submissions from `PR-CYBR-FRONTEND-AGENT`.
- **Message Queues**: Employs systems like RabbitMQ for asynchronous processing.

### Data Formats

- **JSON**: Standard format for data exchange.
- **CSV**: For bulk data exports and imports.

### Authentication and Authorization

- **OAuth 2.0**: Secures APIs with token-based authentication.
- **API Keys**: For internal communication with other agents.
- **SSL/TLS Encryption**: Ensures secure data transmission.

## Interaction with Specific Agents

### PR-CYBR-FRONTEND-AGENT

- **Feedback Channels**: Embeds forms and chat interfaces into the user interface.
- **Real-Time Updates**: Receives user interaction data for immediate processing.

### PR-CYBR-BACKEND-AGENT

- **Data Handling**: Processes submissions and stores raw feedback data.
- **Authentication**: Manages user sessions for feedback-related activities.

### PR-CYBR-MGMT-AGENT

- **Insight Delivery**: Provides reports and trends to inform strategic decisions.
- **Feedback Loop**: Influences policy and feature development based on user input.

### PR-CYBR-PERFORMANCE-AGENT

- **Experience Metrics**: Supplies user satisfaction scores and feedback-related performance indicators.
- **Anomaly Detection**: Alerts when there is a significant change in user sentiment.

## Technical Workflows

### Feedback Collection Workflow

1. **User Interaction**: User submits feedback via web form, chatbot, or email.
2. **Data Capture**: Feedback data is collected by modules in `feedback_collection/`.
3. **Storage**: Raw feedback is stored in `data/raw_feedback/`.
4. **Acknowledgment**: User receives confirmation of feedback submission.

### Data Processing and Analysis Workflow

1. **Data Retrieval**: Raw feedback is fetched from storage.
2. **Preprocessing**: `analyze_text()` cleans and tokenizes text.
3. **Sentiment Analysis**: `perform_sentiment_analysis()` assigns sentiment scores.
4. **Data Storage**: Processed data is saved in `data/processed_feedback/`.

### Reporting Workflow

1. **Data Aggregation**: Collects processed feedback for reporting periods.
2. **Trend Analysis**: Identifies common themes and issues.
3. **Report Generation**: `generate_feedback_reports()` creates reports.
4. **Distribution**: Reports are shared with relevant agents and stakeholders.

## Error Handling and Logging

- **Input Validation**: Ensures feedback data meets expected formats.
- **Exception Handling**: Catches and logs errors during data processing.
- **Logging**: Maintains logs for feedback submissions and processing activities.
- **User Notifications**: Informs users if their feedback could not be processed.

## Security Considerations

- **Data Privacy**: Complies with data protection regulations (e.g., GDPR).
- **Anonymization**: Removes personally identifiable information when necessary.
- **Access Controls**: Restricts access to sensitive feedback data.
- **Encryption**: Encrypts data at rest and in transit.

## Deployment and Scaling

- **Containerization**: Dockerized application for consistent deployments.
- **Orchestration**: Uses Docker Compose for local setups and Kubernetes for cloud deployments.
- **Scalability**: Designed to handle varying volumes of feedback.
- **Load Balancing**: Distributes processing loads across multiple instances.

## Conclusion

The **PR-CYBR-USER-FEEDBACK-AGENT** plays a vital role in maintaining a user-focused approach within the PR-CYBR initiative. By efficiently collecting and analyzing user feedback, it provides valuable insights that drive improvements across all aspects of the initiative. Its integration with other agents ensures that user voices are heard and acted upon, fostering a collaborative environment dedicated to enhancing cybersecurity resilience in Puerto Rico.
```


---

## OpenAI Functions

## Function List for PR-CYBR-USER-FEEDBACK-AGENT

```markdown
## Function List for PR-CYBR-USER-FEEDBACK-AGENT

1. **collect_user_feedback**: Gathers feedback from users across various platforms to enhance user experience.
2. **analyze_sentiment**: Analyzes user comments and feedback to determine overall sentiment and categorize responses.
3. **identify_trends**: Identifies trends in user feedback and behavior to highlight common pain points and areas for improvement.
4. **generate_feedback_report**: Creates comprehensive reports summarizing user feedback, trends, and actionable insights.
5. **manage_feature_requests**: Collects and catalogs user requests for new features or enhancements, facilitating discussions with development teams.
6. **engage_community**: Organizes sessions or surveys to foster community engagement and validate proposed changes or enhancements.
7. **update_documentation**: Collaborates with PR-CYBR-DOCUMENTATION-AGENT to update FAQs and user guides based on common queries or issues.
8. **ensure_accessibility**: Prioritizes feedback from users with accessibility needs and advocates for inclusive design considerations.
9. **maintain_feedback_loop**: Communicates updates to users about changes made in response to their feedback, ensuring transparency.
10. **automate_feedback_collection**: Implements tools and technologies to automate the feedback collection process and initial categorization.
```