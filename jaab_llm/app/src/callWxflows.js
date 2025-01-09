import wxflows from 'wxflows'

/*export async function getWebsiteContents(url) { // Modified function
    try {
        const response = await fetch('/api/getWebsiteContents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url }), // Send the URL to the server
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.content;  // Return the content received from the server

    } catch (error) {
        console.error('Error fetching website content:', error);
        return null;
    }
}*/


export async function getAnswer(question, selectedLLM, selectedFlow) {
    const model = new wxflows({
        endpoint: import.meta.env.VITE_WXFLOWS_ENDPOINT,
        apikey: import.meta.env.VITE_WXFLOWS_APIKEY,
    })

    const schema = await model.generate()

    /*if (selectedFlow === 'webpage_summarization') { // Strict equality check
        const content = await getWebsiteContents(question);
        question = content;
    }*/

    // Make sure these match your values in `wxflows.toml`
    const flowName = selectedFlow
   
        const result = await model.flow({
            schema,
            flowName,
            variables: {
                question,
                model: selectedLLM,
                parameters: {
                    temperature: 0.8,
                    decoding_method: 'greedy',
                    max_new_tokens: 700,
                    stop_sequences: []
                },
            },
        })

    //return result?.data?.[flowName]?.out?.modelResponse?.results[0]?.generated_text;
    return result?.data?.[flowName]?.out?.results[0]?.generated_text;
    
}
