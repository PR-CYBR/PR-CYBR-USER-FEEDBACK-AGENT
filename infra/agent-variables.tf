#############################################
# PR-CYBR Agent Variables Schema            #
#                                           #
# All runtime values are injected via       #
# Terraform Cloud workspace variables.      #
# These declarations ensure terraform plan  #
# validates without requiring local secrets.#
#############################################

variable "AGENT_ID" {
  type        = string
  description = "Unique agent identifier (e.g., A-12)."
}

variable "PR_CYBR_DOCKER_USER" {
  type        = string
  description = "Shared DockerHub service account username."
}

variable "PR_CYBR_DOCKER_PASS" {
  type        = string
  sensitive   = true
  description = "Shared DockerHub service account password."
}

variable "DOCKERHUB_USERNAME" {
  type        = string
  description = "GitHub Actions DockerHub username for publishing images."
}

variable "DOCKERHUB_TOKEN" {
  type        = string
  sensitive   = true
  description = "GitHub Actions DockerHub personal access token."
}

variable "GLOBAL_DOMAIN" {
  type        = string
  description = "Root DNS domain for PR-CYBR hosted services."
}

variable "AGENT_ACTIONS" {
  type        = string
  sensitive   = true
  description = "Automation token used by the agent's GitHub Actions workflows."
}

variable "NOTION_TOKEN" {
  type        = string
  sensitive   = true
  description = "Shared integration token for the PR-CYBR Notion workspace."
}

variable "NOTION_DISCUSSIONS_ARC_DB_ID" {
  type        = string
  description = "Database ID for the Notion Discussions ARC board."
}

variable "NOTION_ISSUES_BACKLOG_DB_ID" {
  type        = string
  description = "Database ID for the Notion Issues backlog."
}

variable "NOTION_KNOWLEDGE_FILE_DB_ID" {
  type        = string
  description = "Database ID for the Notion Knowledge files."
}

variable "NOTION_PROJECT_BOARD_BACKLOG_DB_ID" {
  type        = string
  description = "Database ID for the Notion Project board backlog."
}

variable "NOTION_PR_BACKLOG_DB_ID" {
  type        = string
  description = "Database ID for the Notion Pull Request backlog."
}

variable "NOTION_TASK_BACKLOG_DB_ID" {
  type        = string
  description = "Database ID for the Notion Task backlog."
}

variable "NOTION_PAGE_ID" {
  type        = string
  description = "Agent-specific Notion control panel page ID."
}

variable "TFC_TOKEN" {
  type        = string
  sensitive   = true
  description = "Terraform Cloud API token used for workspace automation."
}
