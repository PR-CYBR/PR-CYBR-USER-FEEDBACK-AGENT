########################################################
# PR-CYBR Agent Terraform Bootstrap                    #
#                                                      #
# This module intentionally avoids configuring any     #
# remote backends or providers directly. The Terraform #
# Cloud workspace injects credentials and environment   #
# variables at runtime so that plans remain portable.   #
########################################################

terraform {
  required_version = ">= 1.5.0"
}

locals {
  agent_metadata = {
    agent_id       = var.AGENT_ID
    notion_page_id = var.NOTION_PAGE_ID
  }

  container_registry = {
    dockerhub_username      = var.DOCKERHUB_USERNAME
    dockerhub_token         = var.DOCKERHUB_TOKEN
    pr_cybr_docker_user     = var.PR_CYBR_DOCKER_USER
    pr_cybr_docker_password = var.PR_CYBR_DOCKER_PASS
  }

  notion_databases = {
    discussions_arc       = var.NOTION_DISCUSSIONS_ARC_DB_ID
    issues_backlog        = var.NOTION_ISSUES_BACKLOG_DB_ID
    knowledge_file        = var.NOTION_KNOWLEDGE_FILE_DB_ID
    project_board_backlog = var.NOTION_PROJECT_BOARD_BACKLOG_DB_ID
    pr_backlog            = var.NOTION_PR_BACKLOG_DB_ID
    task_backlog          = var.NOTION_TASK_BACKLOG_DB_ID
    workspace_token       = var.NOTION_TOKEN
    agent_control_page    = var.NOTION_PAGE_ID
  }

  automation_tokens = {
    agent_actions = var.AGENT_ACTIONS
    tfc_token     = var.TFC_TOKEN
  }

  global_networking = {
    domain = var.GLOBAL_DOMAIN
  }
}

output "agent_metadata" {
  description = "Identifiers that differentiate the active agent workspace."
  value       = local.agent_metadata
}

output "container_registry" {
  description = "Docker-related credentials consumed by CI/CD pipelines."
  value       = local.container_registry
  sensitive   = true
}

output "notion_databases" {
  description = "Shared Notion configuration for PR-CYBR automation."
  value       = local.notion_databases
  sensitive   = true
}

output "automation_tokens" {
  description = "Automation tokens used by GitHub Actions and Terraform Cloud."
  value       = local.automation_tokens
  sensitive   = true
}

output "global_networking" {
  description = "Global networking context for PR-CYBR deployments."
  value       = local.global_networking
}
