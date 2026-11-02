# M. Varma — Personal Portfolio

A responsive static portfolio built with HTML, CSS, and JavaScript.

## Run locally
From this folder, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open http://127.0.0.1:8000/

## Features
- About, skills, projects, experience, credentials, and contact sections
- Mobile navigation
- Interactive Idea Machine with randomized reveals and a visible hint
- No frameworks, API keys, or build step required

## Before publishing
- Verify all details and credential names/dates.
- Add links to project repositories or demos where available.
- Confirm your work-history statement and achievement wording.
- Test the navigation, mobile view, and Idea Machine.
- Upload this folder to GitHub and connect the repository to AWS Amplify Hosting.

## Deployment
Use AWS Amplify Hosting with your Git repository. This is a static site; no build command is needed and the output directory is the repository root.

## Creative feature
The Idea Machine reveals short project lessons and curiosities on button click. The section heading provides a visible hint; the feature is implemented in `script.js`.


## Interactive links
The five selected project cards open their corresponding GitHub repositories in a new tab. The five selected credential entries open the supplied certificate or public badge pages. Links are external and require an internet connection.
