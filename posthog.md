
➜  counter-app git:(main) npx -y @posthog/wizard@latest

┌  Welcome to the PostHog setup wizard ✨
│
◆  Detected integration: React Native

┌   PostHog React Native wizard 
│
◇   ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                      │
│  The PostHog React Native wizard will help you set up PostHog for your application.  │
│  Thank you for using PostHog :)                                                      │
│                                                                                      │
├──────────────────────────────────────────────────────────────────────────────────────╯
│
◇  Select your PostHog Cloud region
│  US 🇺🇸
│
●  If the browser window didn't open automatically, please open the following link to login into PostHog:
│  
│  https://us.posthog.com/wizard?hash=osw0jf22vwmht578tluwsr9zj17ussrlwqefn6u9hrxwpny74ph2hgq9f6yeu30d
│
◇  Login complete. 
│
●  Detected Expo
│
◇  Installed posthog-react-native with Expo.
│
◇  Installed posthog-react-native-session-replay with Expo.
│
◇  Installed expo-file-system with Expo.
│
◇  Installed expo-application with Expo.
│
◇  Installed expo-device with Expo.
│
◇  Installed expo-localization with Expo.
│
●  Reviewing PostHog documentation for Expo
│
◇  Found 1 files to change
│
◇  Updated file app/_layout.tsx
│
●  Added Cursor rules to .cursor/rules/posthog-integration.mdc
│
◇  Would you like to install the MCP server to use PostHog in your
editor?
│  Yes
│
◇  Select which PostHog features to enable as tools: (Toggle: Space,
Confirm: Enter, Toggle All: A, Cancel: CTRL + C)
│  Dashboards, Insights, Experiments, LLM Analytics, Error Tracking,
Feature Flags, Workspace, Documentation
│
◇  Select which MCP clients to install the MCP server to: (Toggle:
Space, Confirm: Enter, Toggle All: A, Cancel: CTRL + C)
│  Cursor, Claude Desktop, Visual Studio Code, Zed
│
◇  Opened your project settings. If the link didn't open automatically, open the following URL in your browser to get a Personal API key: 

https://us.posthog.com/settings/user-api-keys?preset=mcp_server
│
◇  Paste in your Personal API key:
│  ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
│
◆  Added the MCP server to:
│    - Cursor
│    - Claude Desktop
│    - Visual Studio Code
│    - Zed 
│
└  
Successfully installed PostHog!  
  
Changes made:
• Installed required packages
• Added PostHogProvider to the root of the app
• Enabled autocapture and session replay
• Added Cursor rules for PostHog

Next steps:
• Call posthog.identify() when a user signs into your app
• Call posthog.capture() to capture custom events in your app
• Upload your Project API key to your hosting provider

Learn more about PostHog + React Native: https://posthog.com/docs/libraries/react-native

Note: This uses experimental AI to setup your project. It might have got it wrong, please check!

You should validate your setup by (re)starting your dev environment (e.g. npm run dev).

If you encounter any issues, let us know here: https://github.com/posthog/wizard/issues

➜  counter-app git:(main) ✗ 