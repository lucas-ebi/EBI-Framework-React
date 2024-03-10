#!/bin/bash

# List of components
components=("EbiFooter" "EbiHeader" "EbiNavbar")

# Create directories and files for each component
for component in ${components[@]}; do
  mkdir -p components/$component
  touch components/$component/$component.js
  touch components/$component/$component.test.js
  touch components/$component/$component.css
done

# List of pages
pages=("DashboardPage" "HelpPage" "HomePage" "LibraryPage" "NotFoundPage" "UserLoginPage" "UserLogoutPage" "UserPage")

# Create directories and files for each page
for page in ${pages[@]}; do
  mkdir -p pages/$page
  touch pages/$page/$page.js
  touch pages/$page/$page.test.js
  touch pages/$page/$page.css
done

# List of submission pages
submission_pages=("DataPage" "OverviewPage" "ProjectPage" "SubmitPage" "TeamPage")

# Create directories and files for each submission page
for page in ${submission_pages[@]}; do
  mkdir -p pages/SubmissionPages/$page
  touch pages/SubmissionPages/$page/$page.js
  touch pages/SubmissionPages/$page/$page.test.js
  touch pages/SubmissionPages/$page/$page.css
done
