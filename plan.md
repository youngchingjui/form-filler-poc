OK, so I need to plan for this application. Currently this application is a demonstration of the real-time API and it shows logs of the API running and it has a short little demo of the real-time API using function calling to pull weather using the get weather function.

I need to transform this application to demonstrate another proof of concept. This proof of concept is going to demonstrate using the real-time API to fill out complicated forms.

Specifically, the form that we would want to fill out is a financial suitability form. There are three main questions that we want the user to answer, and we want this application to automatically fill out the form based off the answers.

The form has three main fields or questions that they need together from the user the first question is what is your current net worth and can you break it down by assets?

The second question is what is your income and can you also break that down for me?

Finally, the last question is, can you please break down your costs? Give me an understanding of what do you spend your money on how frequently and so forth

The user is going to give this input via voice input will use the opening eye real time API to have an AI conversation with a user

As the user is giving this information, then the real time API should both be running function, calls to update the form as well as responding back to the user with some prompts as to further information that it still needs to collect
