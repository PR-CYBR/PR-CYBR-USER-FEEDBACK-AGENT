# Reference template for local testing only. All real values are sourced
# from Terraform Cloud workspace variables. The expressions below make the
# expected mappings explicit without duplicating any sensitive data.
AGENT_ID                           = var.AGENT_ID
PR_CYBR_DOCKER_USER                = var.PR_CYBR_DOCKER_USER
PR_CYBR_DOCKER_PASS                = var.PR_CYBR_DOCKER_PASS
DOCKERHUB_USERNAME                 = var.DOCKERHUB_USERNAME
DOCKERHUB_TOKEN                    = var.DOCKERHUB_TOKEN
GLOBAL_DOMAIN                      = var.GLOBAL_DOMAIN
AGENT_ACTIONS                      = var.AGENT_ACTIONS
NOTION_TOKEN                       = var.NOTION_TOKEN
NOTION_DISCUSSIONS_ARC_DB_ID       = var.NOTION_DISCUSSIONS_ARC_DB_ID
NOTION_ISSUES_BACKLOG_DB_ID        = var.NOTION_ISSUES_BACKLOG_DB_ID
NOTION_KNOWLEDGE_FILE_DB_ID        = var.NOTION_KNOWLEDGE_FILE_DB_ID
NOTION_PROJECT_BOARD_BACKLOG_DB_ID = var.NOTION_PROJECT_BOARD_BACKLOG_DB_ID
NOTION_PR_BACKLOG_DB_ID            = var.NOTION_PR_BACKLOG_DB_ID
NOTION_TASK_BACKLOG_DB_ID          = var.NOTION_TASK_BACKLOG_DB_ID
NOTION_PAGE_ID                     = var.NOTION_PAGE_ID
TFC_TOKEN                          = var.TFC_TOKEN
