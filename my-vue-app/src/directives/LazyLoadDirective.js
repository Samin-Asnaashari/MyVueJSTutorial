export default {
  inserted: el => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        el => el.nodeName === "IMG"
      );
      console.log(imageElement, "imageElement");
      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 1000);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        // console.log(entry, "entry");
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        // circumstances under which the observer's callback is invoked
        root: null, // defaults to the browser viewport if not specified or if null
        threshold: "0" // the degree of intersection between the target element and its root (0 - 1)
        // threshold of 1.0 means that when 100% of the target is visible within
        //the element specified by the root option, the callback is invoked
      };

      // Whether you're using the viewport or some other element as the root,the API works the same way,
      // executing a callback function you provide whenever the visibility of the target element changes
      // so that it crosses desired amounts of intersection with the root
      const observer = new IntersectionObserver(handleIntersect, options);

      observer.observe(el); // target element to watch
    }

    if (!window["IntersectionObserver"]) {
      loadImage();
    } else {
      createObserver();
    }
  }
};

// // polyfill for Safari / IE 11
// require('intersection-observer');

// /**
//  * The intersection observer directive is used to detect when the element
//  * is visible is the viewport. It emits 'intersect-enter' when element becomes
//  * visible in the viewport and 'intersect-leave' when element leaves the
//  * viewport. Usage as below:
//  *
//  * v-intersection-observer="{ rootMargin: '<yourRootMarginValue>', threshold: '<yourThresholdValue>' }"
//  *
//  * To handle viewoport enter/leave events, declare following callbacks:
//  *
//  * @viewport-entered="<yourViewportEnteredHandler>"
//  * @viewport-left="<yourViewportLeftHandler>"
//  */

// export const IntersectionObserverDirective = {
//   inserted: (el, binding, vnode) => {
//     function emit(eventName) {
//       if (vnode.componentInstance) {
//         // If the directive was used in a Vue custom component, call $emit() of that component's instance
//         vnode.componentInstance.$emit(eventName);
//       } else {
//         // If the directive was used in a regular DOM element (because there's no $emit()) dispatch a native
//         // DOM event using .dispatchEvent. v-on listeners respond to native custom events
//         vnode.elm.dispatchEvent(new CustomEvent(eventName));
//       }
//     }

//     function handleIntersect(entries) {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           emit('viewport-entered');
//         } else {
//           emit('viewport-left');
//         }
//       });
//     }

//     function createObserver() {
//       const options = {
//         // circumstances under which the observer's callback is invoked
//         root: null, // defaults to the browser viewport if not specified or if null
//         threshold: parseInt(binding.value.threshold || '0', 10), // the degree of intersection between the target element and its root (0 - 1)
//         // threshold of 1.0 means that when 100% of the target is visible within
//         // the element specified by the root option, the callback is invoked
//         rootMargin: binding.value.rootMargin || '0px'
//       };

//       const observer = new IntersectionObserver(handleIntersect, options);

//       observer.observe(el); // target element to watch
//     }

//     if (window.IntersectionObserver) {
//       createObserver();
//     }
//   }
// };


// /**
//  * By importing and executing the registration function the directive is
//  * available globally. Instead you can also import the IntersectionObserverDirective
//  * directly and then attach it globally in individual components.
//  *
//  * @param {Object} Vue
//  */
// export function registerDirective(Vue) {
//   Vue.directive('intersection-observer', IntersectionObserverDirective);
// }
