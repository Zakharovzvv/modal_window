function _createModal() {
  const $container = document.createElement('div')
  $container.classList.add('v-modal')
  $container.insertAdjacentHTML('afterbegin', `
  <div class="modal-wrapper">
      <div class="modal-window">
          <div class="modal-header">
              <span class="modal-title">Title</span>
              <span class="modal-close">&times;</span>
          </div>
          <div class="modal-content"></div>
          <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-ok">OK</button>
              <button type="button" class="btn btn-primary btn-cancel">Cancel</button>
          </div>
      </div>  
    </div>  
  `)
  document.body.append($container)
  return $container
}

$.modal = function (options) {
  let $modal=_createModal()
  return {
    open() {
      $modal.classList.toggle('open')
    },
    close() {
 //     if ($modal) {
        $modal.classList.toggle('open')
//      }
    },
    destroy() {
      $modal = null
    }
  }
}

