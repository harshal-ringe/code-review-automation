 **Jira ID**: IMS-1234

**Description/Purpose**: Create new incident on web

**Affected Teams**: Mention team name in Jira ticket

**Affected Areas**
- [ ] Incident Save from Web

**Review Checklist**
- [ ] Check if the code is formatted, error-free, and static analysis is done.
- Check if [coding standards](https://247software.atlassian.net/l/cp/o0XP3gQd) are followed.
	- [ ] Variable names, function names, and class names should be appropriate and meaningful.
	- [ ] Check if the file name and folder structure is correct.
	- [ ] Console logs, commented code, unused imports/variables and testing flags should be removed. 
	- [ ] Use existing functions or library helpers to avoid boilerplate code.
	- [ ] Check if the DRY(Don’t Repeat Yourself) principle is followed or not.
	- [ ] Code should be broken down into separate functions and each function should have a single responsibility.
	- [ ] Check if the code is simple, readable, optimized, extensible for future needs, and comment is added whenever needed.
	- [ ] Check if logic aligns with the requirement and followed the technical design review feedback.
- Check if [HTML Guidelines](https://247software.atlassian.net/l/cp/zHU0dtY9) and [CSS Guidelines](https://247software.atlassian.net/l/cp/7NdRSXQs)  are followed. 
	- [ ] Use semantic tags and avoid unnecessary nesting of divs.
	- [ ] IDs should be unique and class names should not be generic.
	- [ ] Styles should be in a separate file. Add the required styling only, don’t copy-paste XD styling as it is.
	- [ ] Check if newly added styles overridng the existing style.
	- [ ] Check if Dark mode UI is handled.
- Check if [JavaScript Guidelines](https://247software.atlassian.net/l/cp/uV5mJ24F) and [React Guidelines](https://247software.atlassian.net/l/cp/S12Fz7Xe) are followed.
	- [ ] Check for DOM access and DOM manipulation. DOM should not be accessed frequently and manipulated directly using JS or jQuery.
	- [ ] Check if the API keys and environment dependent variables are added as constant in .env file. 
	- [ ] Packages should be imported lazily and in proper sequence. Likewise the sequence of hooks and useEffect should be proper.
	- [ ] Verify the separation between UI and functionality. JS logic should not be written inside JSX.
	- [ ] Class components and deprecated life cycle events should not be used anymore.
	- [ ] Events should be attached to React elements instead of attaching directly to the DOM elements.
	- [ ] Check if attached events, setIntervals and localStorage data are removed after component unmount.
	- [ ] Avoid Prop Drilling and use Context API instead
- [ ] Check whether user permissions are handled properly or not. The components and page should not be displayed if the user doesn’t have permission
	- Account module permission, Facility permission & Facility module permission, Subscription Tier permission, User permission.
- Check if APIs are called correctly.
	- [ ] API calls should be asynchronous. The independent API calls should be grouped using Promise.all and dependant calls should be cascaded(or use await).
	- [ ] API calls should not be frequent and only download required data. 
	- [ ] Check if debouncing is needed to avoid multiple API calls. For eg. On multiple clicks, it should not make multiple API calls.
- Check if the code is performant.
    - [ ] setTimeout should not be used. 
	- [ ] Multiple setState should be avoided. 
	- [ ] The useEffects should have proper dependencies.
	- [ ] Use React.memo to avoid expensive calculation.
	- [ ] If large data is going to be displayed then virtual rendering with lazy-loading should be implemented.
	- [ ] The loader or skeleton should be displayed while downloading bundles or data.
- Check if packages are added/updated/removed properly.
	- [ ] Check if the new package is approved by the AR team.
	- [ ] While removing/updating an existing package, Check all affected areas in all repositories.
	- [ ] Check if cache invalidation is required or not.
- [ ] Take confirmation from other teams if you are making changes in common files/components.
- [ ] Check for console errors, possible exceptions, and negative scenarios.
- Check if the code is showing the desired output on the UI.
	- [ ] Check if the output matches the requirement.
	- [ ] Check for spelling and grammatical mistakes.
	- [ ] Check if the UI follows the design guidelines.
		- Font size, Font style, Font Color, Background Color.
		- Spacing/paddings between components.
		- Check Dark mode UI.
	- [ ] Check the accessibility of components.
		- Tootip, Placeholder.
		- Mouse pointers, Keyboard navigation, Keyboard shortcuts, Tab sequence.
		- UI position, Z-Index, dropdown directions.
	- [ ] Check the look and feel.
		- Check responsiveness to different sizes.
		- Check animation direction and speed.
		- Check the necessity of loaders and time to interaction.
	- [ ] Check grid features.
		- check for column sequence, column re-ordering, column-resizing, column name position, and header menu options.
		- check filtering, sorting, and pagination.
		- check if the grid state is maintained.
	- [ ] Check Cross browser compatibility.
		- Chrome, Firefox, Edge, Safari.
