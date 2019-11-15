To see the problem, you should just need to do `npm install` and then `npm run test`. What will happen is that the tests will gradually slow to a crawl
and then fail to complete. If you really want to make it happen fast, you can add `--maxWorkers=1` to the command for running the tests in the `scripts`
section of `package.json`.

