
$("#cardModal").on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget) // Button that triggered the modal
    const name = button.data("name");
    const img = button.data("img");
    const description = button.data("description");
    const source = button.data("source_url");
    const website = button.data("website_url"); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    const modal = $(this)
    //modal.find('.modal-title').text(name);
    //modal.find('.modal-body').text(description);
})