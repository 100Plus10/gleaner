/**
 *
 * Created by hywilliam on 7/21/15.
 */
// add a new notebook
function addNotebook() {
    var newNotebook = {
        'name': 'Your New Notebook.',
        'date': new Date().toLocaleDateString(),
        'articles': []
    };
    notebooks.push(newNotebook);
    gleaner.addNotebook(newNotebook);
}
$('#addNotebook').click(addNotebook);
