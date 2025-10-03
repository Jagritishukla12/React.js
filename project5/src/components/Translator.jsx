import React, { useState } from 'react';


export default function Translator() {
    const [inputFormat, setInputFormat] = useState('en');
    const [outputFormat, setOutputFormat] = useState('hi');
    const [translatedText, setTranslatedText] = useState('Translation');
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);

    
    const handleReverseLanguage = () => {
        setInputFormat(outputFormat);
        setOutputFormat(inputFormat);
        setInputText('');
        setTranslatedText('Translation');
    };

    const handleRemoveInputText = () => {
        setInputText('');
        setTranslatedText('Translation');
    };


    const handleTranslate = async () => {
        if (!inputText.trim()) return;
        setLoading(true);

        const url = `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${outputFormat}&api-version=3.0&profanityAction=NoAction&textType=plain`;

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': "YOUR_API_KEY", 
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: JSON.stringify([{ Text: inputText }])
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const translation = result[0].translations[0].text;
            setTranslatedText(translation);
        } catch (error) {
            console.error(error);
            alert("Some error occurred, please try again!");
        }
        setLoading(false);
    };

    return (
        <div className="translator-container">
    
            <div className="row1">
                <select value={inputFormat} onChange={(e) => setInputFormat(e.target.value)}>
                    {Object.keys(languageList).map((key, index) => (
                        <option key={index} value={key}>{languageList[key].name}</option>
                    ))}
                </select>

                <svg className='reversesvg' onClick={handleReverseLanguage}
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
                </svg>

                <select value={outputFormat} onChange={(e) => {
                    setOutputFormat(e.target.value);
                    setTranslatedText('Translation');
                }}>
                    {Object.keys(languageList).map((key, index) => (
                        <option key={index + 100} value={key}>{languageList[key].name}</option>
                    ))}
                </select>
            </div>


            <div className="row2">
                <div className="inputText">
                    {inputText.length > 0 && (
                        <svg className='removeinput'
                             onClick={handleRemoveInputText}
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 
                                     6.41 5 5 6.41 
                                     10.59 12 5 17.59 
                                     6.41 19 12 13.41 
                                     17.59 19 19 17.59 
                                     13.41 12z"></path>
                        </svg>
                    )}
                    <textarea
                        value={inputText}
                        placeholder='Enter text here...'
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </div>
                <div className="outputText">{translatedText}</div>
            </div>

        
            <div className="row3">
                <button className='btn' onClick={handleTranslate} disabled={loading}>
                    {loading ? (
                        <i className="fa fa-spinner fa-spin"></i>
                    ) : (
                        <span className='translate'>Translate</span>
                    )}
                </button>
            </div>
        </div>
    );
}
