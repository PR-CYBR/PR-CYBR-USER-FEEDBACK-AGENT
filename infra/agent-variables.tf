# ---------------- Terraform Variables ----------------
variable "AGENT_ID" {
  description = "Agent identifier for User Feedback Agent (A-12)"
  type        = string
}

variable "DOCKERHUB_USERNAME" {
  description = "Docker Hub username used for PR-CYBR builds"
  type        = string
}

variable "GLOBAL_DOMAIN" {
  description = "Primary domain for PR-CYBR infrastructure"
  type        = string
}

variable "PR_CYBR_DOCKER_USER" {
  description = "Docker Hub user for PR-CYBR builds"
  type        = string
}

variable "PR_CYBR_DOCKER_PASS" {
  description = "Sensitive Docker Hub password/token"
  type        = string
}

# ---------------- Environment Variables ----------------
variable "AGENT_ACTIONS" {
  description = "Sensitive orchestration token controlling Codex permissions"
  type        = string
}

variable "DOCKERHUB_TOKEN" {
  description = "Sensitive Docker Hub API access token"
  type        = string
}

variable "NOTION_DISCUSSIONS_ARC_DB_ID" {
  description = "Notion DB ID for discussions archive (feedback threads)"
  type        = string
}

variable "NOTION_ISSUES_BACKLOG_DB_ID" {
  description = "Notion DB ID for issues backlog (bug feedback)"
  type        = string
}

variable "NOTION_KNOWLEDGE_FILE_DB_ID" {
  description = "Notion DB ID for knowledge articles related to feedback"
  type        = string
}

variable "NOTION_PAGE_ID" {
  description = "Main Notion page for user feedback aggregation"
  type        = string
}

variable "NOTION_PR_BACKLOG_DB_ID" {
  description = "Notion DB ID for PR backlog tracking"
  type        = string
}

variable "NOTION_PROJECT_BOARD_BACKLOG_DB_ID" {
  description = "Notion DB ID for project board backlog (feedback tasks)"
  type        = string
}

variable "NOTION_TASK_BACKLOG_DB_ID" {
  description = "Notion DB ID for task backlog"
  type        = string
}

variable "NOTION_TOKEN" {
  description = "Sensitive Notion integration token"
  type        = string
}

variable "TFC_TOKEN" {
  description = "Sensitive Terraform Cloud API token for sync operations"
  type        = string
}
