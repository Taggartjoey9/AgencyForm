const LABEL_TEXT = [
    'Apply to work with our agency',
    'What\'s your budget?',
    'Anything else we should know?',
    'Thank you!'
]

export default function Leftside({stage, setStage}) {


    let content;
        
        if (stage === 0) {
            content = (
                <input type="text" placeholder="What's your email?" />       
            )
        } else if (stage === 1) {
            content = (

                <div className='button-group'>
                    <button>$2k</button>
                    <button>$5k</button>
                    <button>No Limit</button>
                </div>
            )
        } else if (stage === 2) {
            content = (
                <input type="text" placeholder=""></input>       
            )
        };

    return (

        <div className="container">
            <div className="left-text">
                <h1>{LABEL_TEXT[stage]}</h1>
                {content}
                {stage !== 3 && (<button className="next-button" onClick={() => setStage(stage + 1)}>Next</button>)}
            </div>
            <div className="right-img"></div>
        </div>
    )
}