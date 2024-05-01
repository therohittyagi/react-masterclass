<!--
* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantContainer
*   - RestaurantCard
*      - Img
*      - Name of Res , Star Rating , cuisine ,  delivery time
* Footer
* - Copyright
* - Links
* - Address
* - Contact
 -->

 <!--
*Props
 -->

 <!-- 
 * Config Driven UI - Controling your UI by Config which is coming from backend
 - All the UI (let say, Swiggy homepage) is driven by a config
which is send by backend(api).
  -->

<!-- if we dont write key there will also a decrease in performance of react because it does not able to identify the element-->

<!-- React doesnot recomment index as key because they say it is antipattern -->

<!-- not using key < index as key < unique key -->

<!-- Two Types of Export And Import -->

<!-- Named Export - in a single file we have to export multiple things -->

<!-- export const CDN_CARD_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
 -->

<!-- Named import - only done in curly braces -->

<!-- import { CDN_CARD_IMG_URL } from "../utils/constants"; -->

<!-- Default Export - only one default export can be done in one file -->

<!-- export default restList;-->

<!-- Default import - no need of curly braces -->

<!-- import restList from "../utils/mockData"; -->

<!-- you can put multiple event handler  -->

<!-- Hooks - are normal js function which is given to us by react . it is pre build utility function ,written by facebook developer inside the react -->

<!-- imp hooks -->

<!-- useState() - use to generate super poweful react state variable -->
<!-- whenever a state variable updates react rerender the component -->

<!-- useEffect() -  -->


# Reconciliation Algorithm (React Fiber) - in react 16 a new algo is came up to diff and updating the dom
# Virtual DOM - it is representation of actual DOM 
# diff Algorithm - find difference between updated and previous virtual dom