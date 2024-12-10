# Objective

Transform the existing application from demonstrating weather retrieval to filling out a financial suitability form using the real-time API.

# Features to Implement

## Voice Input

- Capture user responses to three main questions using voice input.

## Real-time API Integration

- Use the OpenAI real-time API to process voice input and fill out the form.

## Form Fields

- **Current Net Worth and Asset Breakdown**
- **Income and Its Breakdown**
- **Costs and Spending Habits**

# Technical Steps

## Voice Input Handling

- Utilize the existing `WavRecorder` for capturing voice input.
- Ensure the `RealtimeClient` is set up to handle voice input and transcription.

## API Function Calls

- Modify or add new tools in the `RealtimeClient` to handle form filling logic.
- Implement a new function to process the financial data and update the form fields.

## Form Management

- Create a new component or modify an existing one to display the financial suitability form.
- Ensure the form updates in real-time as the user provides input.

## User Interaction

- Provide feedback to the user through the real-time API, prompting for more information if needed.
- Use the `WavStreamPlayer` to play back responses or confirmations to the user.

## Code Modifications

- **Update `ConsolePage.tsx`:**
  - Add logic to handle new form-related function calls.
  - Update the event handling to process and display form data.
- **Modify `conversation_config.js`:**
  - Update instructions to guide the AI in handling financial data input.

## Testing and Validation

- Test the application with various inputs to ensure the form is filled out accurately.
- Validate the voice input and transcription accuracy.

## Deployment

- Ensure the application is ready for deployment with the new features.
- Update documentation to reflect changes in functionality.
