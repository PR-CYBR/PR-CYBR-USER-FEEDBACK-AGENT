<!--
Updates that need to be made:
1. 
-->

# PR-CYBR-USER-FEEDBACK-AGENT

## Overview

The **PR-CYBR-USER-FEEDBACK-AGENT** collects, processes, and analyzes user feedback to improve the PR-CYBR ecosystem. This agent empowers developers with actionable insights from user interactions and feedback channels.

## Key Features

- **Feedback Collection**: Aggregates feedback from multiple sources, including surveys, feedback forms, and direct submissions.
- **Sentiment Analysis**: Applies natural language processing to assess user sentiment and prioritize critical issues.
- **Actionable Insights**: Generates reports to guide development priorities and enhance user satisfaction.
- **Integration Support**: Easily integrates with tools like GitHub Issues, Jira, and Slack for seamless feedback management.
- **Customizable Pipelines**: Adapts feedback analysis workflows to meet specific project needs.

## Getting Started

### Prerequisites

- **Git**: For cloning the repository.
- **Python 3.8+**: Required for running scripts.
- **Docker**: Required for containerization and deployment.
- **Access to GitHub Actions**: For automated workflows.

### Local Setup

To set up the `PR-CYBR-USER-FEEDBACK-AGENT` locally on your machine:

1. **Clone the Repository**

```bash
git clone https://github.com/PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT.git
cd PR-CYBR-USER-FEEDBACK-AGENT
```

2. **Run Local Setup Script**

```bash
./scripts/local_setup.sh
```
_This script will install necessary dependencies and set up the local environment._

3. **Provision the Agent**

```bash
./scripts/provision_agent.sh
```
_This script configures the agent with default settings for local development._

### Cloud Deployment

To deploy the agent to a cloud environment:

1. **Configure Repository Secrets**

- Navigate to `Settings` > `Secrets and variables` > `Actions` in your GitHub repository.
- Add the required secrets:
     - `CLOUD_API_KEY`
     - `DOCKERHUB_USERNAME`
     - `DOCKERHUB_PASSWORD`
     - Any other cloud-specific credentials.

2. **Deploy Using GitHub Actions**

- The deployment workflow is defined in `.github/workflows/docker-compose.yml`.
- Push changes to the `main` branch to trigger the deployment workflow automatically.

3. **Manual Deployment**

- Use the deployment script for manual deployment:

```bash
./scripts/deploy_agent.sh
```

- Ensure you have Docker and cloud CLI tools installed and configured on your machine.

## Integration

The `PR-CYBR-USER-FEEDBACK-AGENT` integrates with other PR-CYBR agents to enhance the overall user experience. It communicates with:

- **PR-CYBR-FRONTEND-AGENT**: Collects feedback through frontend interfaces like forms and chatbots.
- **PR-CYBR-BACKEND-AGENT**: Processes feedback data and stores it securely.
- **PR-CYBR-DATA-INTEGRATION-AGENT**: Integrates feedback data with other datasets for comprehensive analysis.
- **PR-CYBR-MGMT-AGENT**: Provides insights and reports to inform decision-making.

## Usage

- **Development**

  - Start the feedback collection services:

```bash
python setup.py develop
```

  - Configure data sources and processing parameters in the `config/` directory.

- **Testing**

  - Run tests to ensure functionality:

```bash
python -m unittest discover tests
```

- **Building for Production**

  - Build the agent for production use:

```bash
python setup.py install
```

## License

This project is licensed under the **MIT License**. See the [`LICENSE`](LICENSE) file for details.

---

For more information, refer to the [PR-CYBR-FEEDBACK-AGENT Documentation](https://github.com/PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT/Wiki) or contact the PR-CYBR team.
