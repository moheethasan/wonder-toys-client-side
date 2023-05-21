import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Wonder Toys | Blog</title>
      </Helmet>
      <div className="container mx-auto mt-20 mb-32 px-4">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-16">
          <span className="title-text">Frequently Asked Questions</span>
        </h1>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-black text-slate-400">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content bg-slate-900 text-slate-400">
            <p>
              <b>Access tokens</b> are credentials that allow clients to access
              specific resources on a server. They are given after successful
              authentication and are time-limited. <b>Refresh tokens</b> are
              separate credentials used to obtain new <b>access tokens</b>{" "}
              without re-authentication. They provide a way to maintain
              continuous access.
              <b>Access tokens</b> are stored temporarily. We can store them in
              in-memory storage, session storage, local storage, HTTP-only
              cookies while
              <b>refresh tokens</b> need to be securely and persistently stored
              (in a secure HTTP-only cookie or encrypted storage) to prevent
              unauthorized access.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-black text-slate-400">
            2. Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content bg-slate-900 text-slate-400">
            <p>
              <b>SQL</b> databases, based on the relational model, utilize
              structured schemas and enforce relationships for managing
              structured data with complex relationships. They provide powerful
              querying capabilities using <b>SQL</b> syntax, making them
              suitable for applications with well-defined schemas. <b>NoSQL</b>{" "}
              databases, on the other hand, are designed for handling
              unstructured or semi-structured data. They offer flexibility in
              data modeling without fixed schemas and can scale horizontally to
              handle large volumes of data. <b>NoSQL</b> databases excel in
              scenarios requiring high performance, real-time data processing,
              and scalability. They are commonly used in applications such as
              social media, IoT, and content management.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-black text-slate-400">
            3. What is express js? What is Nest JS?
          </div>
          <div className="collapse-content bg-slate-900 text-slate-400">
            <p>
              <b>Express.js</b> is a minimalist web framework for Node.js that
              simplifies web development by providing features for routing,
              middleware, and handling HTTP requests and responses. It is highly
              flexible and allows developers to create custom solutions.{" "}
              <b>Nest.js</b>, built with TypeScript, is a versatile framework
              that combines elements from
              <b>Express.js</b>. It emphasizes modularity, dependency injection,
              and strong typing for building scalable and maintainable
              server-side applications. <b>Nest.js</b> follows a
              &#34;code-first&#34; approach and provides architectural patterns
              and tooling for projects of various sizes.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium bg-black text-slate-400">
            4. What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content bg-slate-900 text-slate-400">
            <p>
              MongoDB&#39;s aggregate is a powerful feature used for data
              aggregation and processing within the database. It allows
              developers to perform advanced operations on data, similar to
              GROUP BY and JOIN in SQL. The aggregate pipeline consists of
              multiple stages that sequentially process documents. Each stage
              performs a specific operation such as filtering, grouping,
              sorting, or computing aggregate values. The pipeline stages can be
              combined to create complex data transformations and analytics. By
              utilizing the aggregation framework, developers can leverage
              MongoDB&#39;s built-in capabilities to extract meaningful insights
              from their data, reducing the need for extensive data manipulation
              in application code and improving overall performance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
