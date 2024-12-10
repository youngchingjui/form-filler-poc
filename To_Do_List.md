# To-Do List for Financial Suitability Form Implementation

## Objective

Transform the existing application from demonstrating weather retrieval to filling out a financial suitability form using the real-time API.

## Instructions

Complete 1 item at a time. Once the item is completed, fill in the checkbox, and then move on to the next item.

After each to-do item is completed, review the plan.md file and to-do list, and assess whether we need to make any changes to the plan.

I want you to implement the todo-list item, then succinctly explain what you did. If you need additional information, ask directly.

## Features to Implement

### 1. Voice Input

- **Capture user responses to three main questions using voice input.**
  - [ ] **Review Existing Components**
    - [ ] Examine the current `WavRecorder` implementation in `src/lib/wavtools/lib/wav_recorder.js`.
    - [ ] Identify how `WavRecorder` integrates with other parts of the application.
  - [ ] **Configure Continuous Voice Streaming**
    - [ ] Modify `WavRecorder` to support continuous voice streaming.
    - [ ] Ensure the stream is compatible with the API for real-time processing.
  - [ ] **Integrate with UI**
    - [ ] Add UI prompts for each question in `src/pages/ConsolePage.tsx`.
    - [ ] Implement dynamic UI updates based on real-time transcription.
  - [ ] **Handle Voice Data**
    - [ ] Implement a continuous data flow to process and map transcriptions to form fields.
    - [ ] Store the captured audio data for processing.
  - [ ] **Testing**
    - [ ] Test continuous voice capture and real-time UI updates.
    - [ ] Validate the accuracy of captured audio.

### 2. Real-time API Integration

- **Use the OpenAI real-time API to process voice input and fill out the form.**
  - [ ] **API Setup**
    - [ ] Obtain API keys for OpenAI real-time API.
    - [ ] Securely store API keys in environment variables.
  - [ ] **Integrate API Client**
    - [ ] Set up the API client within `node_modules/@openai/realtime-api-beta/lib/client.js`.
    - [ ] Configure API endpoints for continuous voice processing.
  - [ ] **Data Flow Implementation**
    - [ ] Implement a streaming data flow in `RealtimeClient` to handle continuous audio input.
    - [ ] Handle transcription responses and map them to form fields.
  - [ ] **Error Handling**
    - [ ] Implement error handling for API request failures.
    - [ ] Create fallback mechanisms for failed API calls.
  - [ ] **Testing**
    - [ ] Test API integration with continuous voice inputs.
    - [ ] Validate the accuracy of transcriptions.

### 3. Form Fields

- **Implement the following form fields:**
  - **Current Net Worth and Asset Breakdown**
    - [ ] Design the UI layout for net worth input in `src/pages/ConsolePage.tsx`.
    - [ ] Create input fields for asset categories.
    - [ ] Implement validation for net worth values.
  - **Income and Its Breakdown**
    - [ ] Design the UI layout for income input.
    - [ ] Create input fields for income sources.
    - [ ] Implement validation for income values.
  - **Costs and Spending Habits**
    - [ ] Design the UI layout for costs input.
    - [ ] Create input fields for different cost categories.
    - [ ] Implement validation for cost values.
  - [ ] **Real-time Updates**
    - [ ] Bind form fields to real-time data models.
    - [ ] Ensure fields update as data is processed.

### 4. UI Enhancements

- **Modify the User Interface for Improved Interaction**
  - [x] **Remove Map from Main Page**
    - [x] Identify and remove the map component from the main page in `src/pages/ConsolePage.tsx`.
  - [ ] **Implement Log Drawer**
    - [ ] Create a drawer component in `src/pages/ConsolePage.tsx` to display logs.
    - [ ] Add a button to toggle the drawer open and closed.
    - [ ] Ensure the drawer is hidden by default and only opens when the button is clicked.
    - [ ] Test the drawer functionality to ensure logs are displayed correctly and the UI remains responsive.

### 5. Question and Answer Component

- **Create a component to display questions and update with user responses**
  - [ ] Design a component to display the following questions:
    - [ ] "What are your assets?"
    - [ ] "What is your income?"
    - [ ] "What are your expenses?"
  - [ ] Integrate the component into `src/pages/ConsolePage.tsx`.
  - [ ] Ensure the component updates in real-time as the AI processes the user's voice input.
  - [ ] Test the component to ensure it accurately reflects the user's responses.

## Technical Steps

### 1. Voice Input Handling

- **Utilize the existing `WavRecorder` for capturing voice input.**

  - [ ] Review and modify `WavRecorder` in `src/lib/wavtools/lib/wav_recorder.js` to handle continuous voice streaming.

- **Ensure the `RealtimeClient` is set up to handle voice input and transcription.**
  - [ ] Update `RealtimeClient` to accept continuous audio inputs.
  - [ ] Implement functions to send audio data to the API.
  - [ ] Handle transcription responses and map them to form fields.

### 2. API Function Calls

- **Modify or add new tools in the `RealtimeClient` to handle form filling logic.**

  - [ ] Create functions to process transcribed text.
  - [ ] Map transcriptions to corresponding form fields.
  - [ ] Implement logic to handle incomplete or ambiguous data.

- **Implement a new function to process the financial data and update the form fields.**
  - [ ] Develop a data processing module within `RealtimeClient`.
  - [ ] Ensure processed data correctly updates the UI in real-time.
  - [ ] Handle edge cases and data inconsistencies.

### 3. Form Management

- **Create a new component or modify an existing one to display the financial suitability form.**

  - [ ] Design the form layout with all required fields in `src/pages/ConsolePage.tsx`.
  - [ ] Implement the form component in React.
  - [ ] Ensure the form is responsive and user-friendly.

- **Ensure the form updates in real-time as the user provides input.**
  - [ ] Implement state management for form data.
  - [ ] Use React hooks or state management libraries to handle real-time updates.
  - [ ] Test real-time data binding between `RealtimeClient` and the form.

### 4. User Interaction

- **Provide feedback to the user through the real-time API, prompting for more information if needed.**

  - [ ] Develop prompts for cases where additional information is required.
  - [ ] Integrate prompts into the user interface.
  - [ ] Ensure prompts are clear and concise.

- **Use the `WavStreamPlayer` to play back responses or confirmations to the user.**
  - [ ] Integrate `WavStreamPlayer` with the form submission process.
  - [ ] Implement audio feedback for successful data submission.
  - [ ] Handle playback errors gracefully.

### 5. Code Modifications

- **Update `ConsolePage.tsx`:**

  - [ ] Add logic to handle new form-related function calls.
  - [ ] Implement event handlers for form interactions.
  - [ ] Ensure seamless integration with existing page components.

- **Modify `conversation_config.js`:**
  - [ ] Update AI instructions to handle financial data input.
  - [ ] Test AI responses to ensure they align with form requirements.
  - [ ] Refine configuration for better data accuracy.

### 6. Testing and Validation

- **Test the application with various inputs to ensure the form is filled out accurately.**

  - [ ] Create a suite of test cases with different voice inputs.
  - [ ] Automate testing for form data accuracy.
  - [ ] Perform manual testing for edge cases.

- **Validate the voice input and transcription accuracy.**
  - [ ] Compare transcriptions against original audio inputs.
  - [ ] Implement metrics to measure transcription accuracy.
  - [ ] Optimize transcription settings based on test results.

### 7. Deployment

- **Ensure the application is ready for deployment with the new features.**

  - [ ] Perform a final review of all new features.
  - [ ] Conduct end-to-end testing in a staging environment.
  - [ ] Prepare deployment scripts and configurations.

- **Update documentation to reflect changes in functionality.**
  - [ ] Revise the `README.md` with new feature descriptions.
  - [ ] Document the setup and configuration process for new components.
  - [ ] Create user guides for interacting with the financial suitability form.
