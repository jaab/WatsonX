# JAAB - Watsonx.ai Flows Engine Demo

This project demonstrates how to use Watsonx.ai flows engine to build flexible generative AI applications that can easily switch between different Large Language Models (LLMs).  It addresses the challenge of choosing the right model amidst the rapidly expanding LLM landscape by providing a unified API and allowing experimentation with various models and prompting techniques.

## Introduction

New models are released almost every day, making it hard for developers to know which one to use based on how they differentiate or are priced.  Having the flexibility to experiment with various models is crucial for effective generative AI development. [Watsonx.ai flows engine](https://www.ibm.com/products/watsonx-ai/flows-engine?utm_source=ibm_developer&utm_content=in_content_link&utm_id=tutorials_awb-using-different-llms-in-watsonx-ai-flows-engine&cm_sp=ibmdev-_-developer-tutorials-_-product)
 offers this flexibility through a unified API that seamlessly integrates with all models available on the IBM watsonx platform.

Whether you're using a foundation model from IBM Granite, Meta's LLama 3, or others, the way you interact with flows engine remains consistent. The only differences lie in prompt structuring and parameters like temperature and decoding methods. This unified approach simplifies model switching and helps developers find the best fit for their use case.

This project demonstrates how to set up Watsonx.ai flows engine and create a custom AI flow for text completion, using different LLMs and prompting techniques.

## Supported LLM Families

This project will explore the following LLMs:

* [IBM Granite](https://developer.ibm.com/tutorials/awb-using-ibm-granite-llms-in-watsonx-ai-flows-engine?utm_source=ibm_developer&utm_content=in_content_link&utm_id=tutorials_awb-using-different-llms-in-watsonx-ai-flows-engine)
* [Meta's LLama](https://developer.ibm.com/tutorials/awb-using-meta-llama-3-1-in-watsonx-ai-flows-engine?utm_source=ibm_developer&utm_content=in_content_link&utm_id=tutorials_awb-using-different-llms-in-watsonx-ai-flows-engine)
* [Mistral](https://developer.ibm.com/tutorials/awb-using-mistral-ai-llms-in-watsonx-ai-flows-engine?utm_source=ibm_developer&utm_content=in_content_link&utm_id=tutorials_awb-using-different-llms-in-watsonx-ai-flows-engine)


## Setting up Watsonx.ai Flows Engine

Watsonx.ai flows engine allows building and consuming AI flows using a CLI.  The free plan provides (limited) access to all models on the watsonx.ai platform.

## Software Requirements

  - Python 3.x
  - Node.js
  - watsonx.ai (models)
  - wxflows SDK (tools)
  - Carbon AI Chat (user interface)

## IDE

The project can be developed and run using any Javascript-compatible IDE. Some popular choices include:

  - Visual Studio Code

## Startup 🚀

1. **Sign Up:** [Create a free account](https://watzen.ibm.stepzen.com/?utm_source=ibm_developer&utm_content=in_content_link&utm_id=tutorials_awb-using-different-llms-in-watsonx-ai-flows-engine) using your IBMid or GitHub account.

2. **Install CLI:** Create a new directory on your machine
[Download and install the CLI on this directory](https://watzen.ibm.stepzen.com/docs/installation?utm_source=ibm_developer&utm_content=in_content_link&utm_id=tutorials_awb-using-different-llms-in-watsonx-ai-flows-engine) (requires Python).

Run the following command in this directory:
```bash
pip install wxflows_cli-1.0.0rc200-py3-none-any.whl --force-reinstall
```
  > Make sure to use the name of the `.whl` file you downloaded.

  This will install the latest version of the CLI from the downloaded `.whl` file.

3. **Authenticate:** [Authenticate to your flows engine account](https://watzen.ibm.stepzen.com/docs/authentication?utm_source=ibm_developer&utm_content=in_content_link&utm_id=tutorials_awb-using-different-llms-in-watsonx-ai-flows-engine):

```bash
wxflows login
```
  Provide the environment name and API key.

4. Clone the repository to a directory you have created:

```bash
git clone https://github.com/jaab/WatsonX.git
```
   
5. Navigate to folder "jaab_llm" and  deploy this flow, which makes it available on a live endpoint that you can connect to by using the SDK.

```bash
wxflows deploy
```
  Note the endpoint URL displayed in the terminal.

6. If necessaire inside folder "App" remove folder and files "node_modules" ; "package-lock.json" and "package.json" and reinstall SDK:

```bash
npm init -y
npm i wxflows
npm install
```

7. Configure file ".env" in folder "src": 

VITE_WXFLOWS_ENDPOINT= [with your endpoint]
VITE_WXFLOWS_APIKEY= [with your appkey]

8. Finally, start the application by running in folder "App":

```bash
npm run dev
```

## Summary
You’ve now successfully set up, deployed, and run a `wxflows` project. This setup provides a flexible environment to allowing you to further build and expand your app with `wxflows` you can add news LLM and Flows for testing, editing files App.jsx and wxflows.toml, feel free to editing this project.

## Contributing
If you'd like to contribute to this project, please follow the standard GitHub workflow: fork the repository, create a new branch, make changes, and submit a pull request.

Feel free to customize the content of the README file based on your project's specific details and features. The goal is to provide clear and concise information to help users and contributors understand how to use and contribute to your application.

## Who, When, Why?
👨🏾‍💻 Author: Jaab
📅 Version: 1.x
📜 License: This project is licensed under the MIT License
