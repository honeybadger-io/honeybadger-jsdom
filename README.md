To see the problem, you should just need to do `npm install` and then `npm run test`. What will happen is that the tests will gradually slow to a crawl
and then fail to complete. If you really want to make it happen fast, you can add `--maxWorkers=1` to the command for running the tests in the `scripts`
section of `package.json`.

Things I've learned:

* Honeybadger's singleton is getting initialized once per test file, setting up its instrumentation each time.
* Commenting out the contents of Honeybadger's `instrument` function does fix the problem.
* Putting console statements into the callbacks from `instrument` shows them being called many times per test execution
* In `jest-environment-jsdom-fourteen`, the environment is also initialized once per test file. The environment appears to be creating a new `jsdom_1.JSDOM` instance, so I'm not sure how the event handlers are remaining each time.




