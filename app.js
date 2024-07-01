const todos = await fetch('./document.json').then(r => r.json())
for ( let i = 0; i < todos.results.length; i++ ) {
    console.log(todos.results[i].title);
    
}