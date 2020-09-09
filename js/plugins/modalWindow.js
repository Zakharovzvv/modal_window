Element.prototype.appendAfter=function (el){
el.parentNode.insertBefore(this,el.nextSibling)
}

function _createModalFooter(buttons){
  const $container=document.createElement('div')
  $container.classList.add('modal-footer')
  if (buttons) {
    buttons.forEach(button => {
      const btn = document.createElement('button')
      btn.classList.add('btn')
      btn.classList.add(`btn-${button.type||'secondary'}`)
      btn.textContent = button.text
      btn.addEventListener('click', button.handler)
      $container.append(btn)

    })
  }
  return $container
}

function _createModal({title='',content='',closable=true,footerButtons}) {
  const $container = document.createElement('div')
  $container.classList.add('v-modal')
  $container.insertAdjacentHTML('afterbegin', `
  <div class="modal-wrapper" data-close="true">
      <div class="modal-window">
          <div class="modal-header">
              <span class="modal-title">${title}</span>
              ${closable? `<span class="modal-close"  data-close="true">&times;</span>`:''}
          </div>
          <div class="modal-content" data-content>
            <p>${content}</p>
          </div>
      </div>  
    </div>  
  `)
  const footer=_createModalFooter(footerButtons)
  footer.appendAfter($container.querySelector('[data-content]'))
  const $content=document.querySelector('.content')
    $content.append($container)
  return $container
}

$.modal = function (options) {
  let $modal=_createModal(options)
  let destroyed=false
  const modal= {
    open() {
      if (!destroyed) {
        $modal.classList.add('open')
      }
    },
    close() {
 //     if ($modal) {
        $modal.classList.remove('open')
      if (typeof options.onClose==='function'){
        options.onClose()
      }
//      }
    },
    setContent(html){
      $modal.querySelector('[data-content]').innerHTML=html
    }

  }

const listener=({target})=>{
  if(target.dataset.close){
    modal.close()
  }
}
  $modal.addEventListener('click',listener)
  return Object.assign(modal,{
    destroy() {
      //$modal.parentNode.removeChild($modal)
      $modal.remove()
      $modal.removeEventListener('click',listener)
      destroyed=true
    }
  })
}

