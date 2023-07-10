import { useState } from "react";

const Content = () => {

    const [textareaValue, setTextareaValue] = useState("");

    const handleSubmitComment = (event) => {
        event.preventDefault();
        
        setTextareaValue(document.getElementById('text-area').value);
        console.log(textareaValue);

        document.getElementById('text-area').value='';
    };

    return (
        <section className="m-5 h-96">
            <div className="mb-5">
                <form onSubmit={(event) => {handleSubmitComment(event)}}>
                    <textarea id="text-area" placeholder="Write here....." className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required></textarea>
                    <div>
                        <button
                            type="submit"
                            className="w-1/2 bg-lime-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <label htmlFor="">Your Comment:</label>
            <p className="text-xl border-2 h-1/2 p-5 whitespace-pre-wrap overflow-auto">{textareaValue}</p>
        </section>
    );
};

export default Content;
