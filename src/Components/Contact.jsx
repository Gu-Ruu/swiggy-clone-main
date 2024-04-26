const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl p-4 m-2 font-bold">Contact US </h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="messsage"
        />
        <button className="border border-black p-2 m-2 bg-slate-300 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
