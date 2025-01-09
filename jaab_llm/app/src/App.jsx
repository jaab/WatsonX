// Copyright IBM Corp. 2020, 2024
import React, { useState } from 'react'
import { Heading, Theme, Grid, Column, Tile, Link, TextArea, TextAreaSkeleton, Button, InlineNotification, ComboBox } from '@carbon/react';
import { LogoGithub } from '@carbon/icons-react';
import './App.scss'
import { getAnswer } from './callWxflows';

function App() {
  const [selectedLLM, setSelectedLLM] = useState('');
  const [selectedFlow, setselectedFlow] = useState('');
  const [question, setQuestion] = useState('What is BCI?');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true)

    try {
      const answer = await getAnswer(question, selectedLLM, selectedFlow)

      if (answer) {
        setAnswer(answer)
      } else {
        throw new Error('Something went wrong')
      }
    } catch (e) {
      console.error('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const missingEnvVariables = !(import.meta.env.VITE_WXFLOWS_ENDPOINT && import.meta.env.VITE_WXFLOWS_APIKEY)

  return (
    <Theme
      theme="g90"
      className='wrapper'
    >
      <Grid>
        <Column sm={4} md={8} lg={16} className='mb-bottom'>
          <div className='heading'>
          <Heading>JAAB | IBM watsonx.ai flows engine</Heading>
          </div>
        </Column>

        {
          missingEnvVariables ? (
            <Column sm={4} md={8} lg={16} className='mb-bottom'>
              <InlineNotification title="Missing environment variables" subtitle="Please set the environment variables for your Endpoint and Api Key in the `.env` file." hideCloseButton />
            </Column>
          ) : null
        }

        <Column sm={4} md={8} lg={16} className='mb-bottom'>
          <Tile>
            Want to build your own AI applications with watsonx.ai Flows Engine? <Link href="https://github.com/jaab/WatsonX/tree/main/jaab_llm" renderIcon={() => <LogoGithub />}>
              You can find the instructions here
            </Link> or have a look at the documentation.
          </Tile>
          <br />
        </Column>

        <Column sm={4} md={8} lg={16} className='mb-bottom'>
        <ComboBox
          id="llm-selector"
          titleText="Select an LLM"
          placeholder="Select an LLM"
          items={['meta-llama/llama-3-3-70b-instruct', 'ibm/granite-13b-instruct-v2', 'mistralai/mistral-large']} // Replace with your actual LLM options
          onChange={({ selectedItem }) => setSelectedLLM(selectedItem)}
          itemToString={(item) => (item ? item : '')} // How to display the selected item
        />
        </Column>

        <Column sm={4} md={8} lg={16} className='mb-bottom'>
        <ComboBox
          id="Flow-selector"
          titleText="Select an Flow"
          placeholder="Select an Flow"
          items={['textCompletion','textCompletionplus', 'webpage_summarization', 'SQL_codeToNL']} // Replace with your actual Flow options
          onChange={({ selectedItem }) => setselectedFlow(selectedItem)}
          itemToString={(item) => (item ? item : '')} // How to display the selected item
        />
        </Column>

        <Column sm={4} md={8} lg={16} className='mb-bottom'>
          <TextArea
            labelText="What is your question?"
            helperText=""
            rows={4}
            onChange={(e) => setQuestion(e.currentTarget.value)}
            value={question}
          />
        </Column>

        <Column sm={4} md={8} lg={16} className='mb-bottom'>
          <Button onClick={() => handleSubmit()} disabled={missingEnvVariables}>Submit</Button>
        </Column>

        <Column sm={4} md={8} lg={16} className='mb-bottom'>
          {isLoading && <TextAreaSkeleton />}
          {!isLoading && answer && (
            <TextArea
              labelText="Answer"
              helperText="This response may be inaccurate depending on how you formatted your question"
              rows={10}
              value={answer}
              disabled
            />
          )}
        </Column>
      </Grid>
    </Theme >
  );
}

export default App
