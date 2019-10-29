Write a NodeJS service using the express framework (or a derivative) that implements a set of RESTful style interfaces to:
• create address records containing a name, street, city, state, and country
• returning a unique key for each address record
• check that the state is valid for the country using an external REST service http://www.groupkt.com/post/f2129b88/free-restful-web-services-to-consume-and-test.htm
• update and delete individual address records
• list all the stored address records for a given state and country
You can store the records in memory, or ideally in another service, such as mongodb or mysql. If you use a durable store, please provide a docker compose file or other instructions for setting up the store and running the DDL to initialize the schema (if necessary); alternatively you can do this as part of your server startup. Provide unit tests for testing your service, and curl commands or a small client for testing it. The JS code should use modern ES7 syntax.

You can use whatever technique is most efficient and elegant, but you should not spend more than a day or two on the challenge. Make sure your solution is clear and well tested.

Provide the solution as a public Github project. Also provide links to any services you tested it against and any necessary instructions for running your code.  Ideally you should make multiple commits to the challenge project so we can see how you evolve the code over time and what you were trying to achieve with each commit.  Do at least one commit before you start testing and one commit for each major bug fix. Feel free to contact me with any questions you have.


http://www.groupkt.com/post/f2129b88/free-restful-web-services-to-consume-and-test.htm
