// Assume previous content remains unchanged

// Add 500ms wait after subscription simulation on line 126
await new Promise(resolve => setTimeout(resolve, 500));

// ...rest of the content

// Add 1000ms wait before webview check on line 304
await new Promise(resolve => setTimeout(resolve, 1000));

// ...rest of the content remains unchanged