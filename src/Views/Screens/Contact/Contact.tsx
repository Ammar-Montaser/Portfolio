import React, { FormEvent } from "react";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("Content-Type", "application/json");

    const response = await fetch("http://localhost:3001/message", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="h-screen relative dark:bg-neutral-950 bg-neutral-100 ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-7xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          LET'S GET IN TOUCH
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Scrolled until here? I would love to get to know you, leave me a
          message and I'll get back to you. If you're shy, you can leave an
          anonymous message.
        </p>
        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-black dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-black dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="What's your name?"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Message *
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Got a business proposal, an advice, or want to leave an anonymous note? Leave a message ... "
              required
            ></textarea>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            {" "}
            <button
              type="submit"
              className="py-3 px-5 text-lg font-medium text-center dark:text-white text-black rounded-lg bg-BG  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>{" "}
            <span className="dark:text-white text-black mx-auto mt-5 text-center">
              {result}
            </span>
          </div>{" "}
        </form>{" "}
        <h2 className="dark:text-white text-black mx-auto text-lg mt-5 italic font-light text-center">
          "Aim for the moon. If you miss you'll land among the stars"
        </h2>
      </div>{" "}
    </div>
  );
}

export default Contact;
