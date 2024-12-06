export default function Contact() {
    return (
        <div>
            <h2 className="text-4xl text-center font-bold p-5">
                Contact Me
            </h2>
            <form className="flex justify-center items-center">
                <div className="bg-lime-300 p-5 rounded-md shadow-md">
                    <div className="flex flex-col gap-y-4">
                        <div>
                            <label className="block">Name:</label>
                            <input type="text" placeholder="Type your name" className="border rounded p-2 w-full" />
                        </div>
                        <div>                            <label className="block">Email:</label>
                            <input type="text" placeholder="Enter your email" className="border rounded p-2 w-full" />
                        </div>
                        <div>
                            <label className="block">Comments:</label>
                            <textarea name="comments" id="comments" rows={4} className="border rounded p-2 w-full"></textarea>
                        </div>
                    </div>
                </div>
            
            </form>
            <div className="flex justify-center items-center">
                <button
            type="submit"
            className="w-100% py-2 m-2  px-3 bg-lime-400 text-white rounded-lg font-semibold transition-all hover:bg-green-400">
                submit
            </button>

           </div>
           
        </div>
        
    );
}
  