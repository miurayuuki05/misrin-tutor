export default function Findtutor() {
  return (
    <div className="flex justify-center my-10">
    <div className="bg-slate-800 w-[90%] md:w-[80%] flex justify-between rounded-md">
        <div className="w-[20%] flex items-center justify-center bg-slate-950 rounded-md">
            <p className="text-white">Find Your <span className="text-green-500 font-bold text-3xl"><br/>Tutor</span></p>
        </div>
        <div className="w-[80%] p-5">
            <form className="flex justify-around">
                <select className="text-slate-300 px-3 p-2 bg-slate-600 rounded-sm w-[30%]" name="subject" id="subject">
                    <option value="grade">Subject</option>
                    <option value="math">Math</option>
                    <option value="english">English</option>
                    <option value="science">Science</option> 
                </select>
                <select className="text-slate-300 px-3 p-2 bg-slate-600 rounded-sm w-[30%]" name="grade" id="grade">
                    <option value="grade">Grade</option>
                    <option value="grade">Grade</option>
                    <option value="grade">Grade</option>
                    <option value="grade">Grade</option>
                </select>
                
                <button className="bg-green-500 hover:bg-green-700 hover:text-white rounded-full px-2">Search</button>
            </form>
        </div>
    </div>
    </div>
  );
}