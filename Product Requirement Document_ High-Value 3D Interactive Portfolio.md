### Product Requirement Document: High-Value 3D Interactive Portfolio

#### 1\. Executive Vision and Strategic Context

The digital landscape is currently navigating a paradigm shift from traditional 2D interfaces toward Spatial Computing and the GPU-accelerated web. With the rapid adoption of AR/VR hardware like the Apple Vision Pro and Meta Quest, standard flat layouts are increasingly insufficient for high-tier professional representation. This project is a strategic response to that shift, positioning the developer as a future-proof architect capable of building immersive storytelling environments. By utilizing Three.js and React Three Fiber (R3F), we move beyond mere aesthetics to demonstrate mastery over latency-sensitive interactions and spatial UI. The core purpose of this portfolio is to transform a static resume into a high-utility career asset—a live proof-of-concept for the immersive future of the web.

#### 2\. Technical Stack and Architectural Foundations

Scaling complex 3D scenes requires a move away from the "code nightmares" of imperative Vanilla JavaScript toward a declarative, component-based workflow. By integrating React with Three.js via React Three Fiber, we treat 3D objects as native JSX elements. This architectural choice enables efficient state management, reusable component logic, and a streamlined frame loop, ensuring the application remains maintainable even as scene complexity increases.

##### 2.1 Core Frameworks and Libraries

Technology,Role in Project,Dependencies / Notes  
Vite,Project scaffolding and build tool,Optimized for high-performance development loops.  
React.js,UI component architecture,Manages the application state and UI lifecycle.  
Three.js,Underlying 3D engine,The industry-standard API for WebGL rendering.  
React Three Fiber (R3F),Declarative 3D wrapper,Bridges Three.js with React's component-based logic.  
React Three Drei,Specialized utility helpers,"Essential for useVideoTexture, useMediaQuery, and useProgress."  
Tailwind CSS,Responsive styling,"Custom utility classes: c-space, head-text, nav-ul, nav-li."  
GSAP,High-performance animations,Handles complex 3D rotations and object transitions.  
EmailJS,Backend-less integration,Facilitates direct email delivery without a server.  
react-globe-gl,Specialized 3D Utility,High-level component for rendering interactive 3D Earth models.

##### 2.2 3D Scene Architecture

The 3D environment functions as a "Mirror Dimension"—a virtual sandbox governed by specific mathematical rules. To initialize this environment, the architect must configure five core components within the R3F Canvas:

1. **Scene:**  The global container representing the coordinate system.  
2. **Cameras:**  Specifically a PerspectiveCamera to mimic human vision. Requirements include defining the  **Field of View (FOV)**  and the  **Clipping Planes**  (Near/Far) to optimize rendering performance.  
3. **Lights:**  Use of  **Ambient Light**  (Base hex: F0F0F0) for uniform illumination and  **Directional Lights**  to cast realistic shadows and provide depth.  
4. **Objects (Meshes):**  Constructed by merging  **Geometry**  (the structural vertices/faces) and  **Material**  (textures/skins).  
5. **Renderer:**  The engine that interacts with the GPU to translate 3D data into 2D pixels on the user's display.

#### 3\. Functional Requirements: The Module Breakdown

The portfolio narrative is a funnel: "The Hook" (Hero) captures attention, "The Evidence" (Projects) proves technical capability, and "The Validation" (Experience) builds professional trust.

##### 3.1 The Hero Section (The Hook)

The Hero section establishes immediate technical authority through high-fidelity assets.

* **A Primary 3D Model:**  The HackerRoom retro desktop setup, located at /models/hacker-room.glb.  
* **Interactive Camera Logic:**  A custom HeroCamera component using pointer-tracking to shift the model’s perspective relative to cursor movement.  
* **Floating Elements:**  Four corner-positioned 3D objects (React Logo, Cube, Target, Rings) utilizing GSAP for continuous floating animations.  
* **Call to Action:**  A "Let's work together" button featuring a pulsing "beam" effect (utilizing BTN-ping utility classes).

##### 3.2 The Bento Grid (The About Section)

The About section uses a high-density grid to communicate versatility.

* **Grid Specification:**  A CSS Grid layout configured for 3 columns and 6 rows on XL screens.  
* **Cell 1:**  Narrative bio.  
* **Cell 2:**  Visual Tech Stack (React, Next.js, Three.js, etc.).  
* **Cell 3:**  Global Reach featuring an interactive 3D Earth (react-globe-gl) with night-mode textures and "I'm Here" labels.  
* **Cell 4:**  Problem-solving philosophy.  
* **Cell 5:**  "Copy Email" block with a success feedback state.

##### 3.3 The Project Showcase (The Evidence)

This module acts as an interactive theater for the developer's work.

* **Texture Mapping:**  A 3D computer model using useVideoTexture to stream project demos directly onto the virtual screen.  
* **State-Driven Updates:**  Switching projects must trigger a GSAP Y-axis rotation and update metadata.  
* **Spotlight Sync:**  A Spotlight component must dynamically update its light color to match the specific spotlight property in the currentProject metadata.  
* **Navigation:**  Left/Right arrow controls with  **wrap-around logic**  (if index \< 0, move to the final project).

##### 3.4 Work Experience and 3D Avatar (The Validation)

This section humanizes the developer through a personalized digital twin.

* **Custom Avatar:**  A Ready Player Me model rigged with Mixamo animations.  
* **Animation Controller:**  Hovering over experience cards triggers specific animations: Salute, Clapping, and Victory.  
* **Cross-Fading:**  All animation transitions must include a  **0.5s cross-fade duration**  for smooth, non-jarring visual shifts.

##### 3.5 Contact and Terminal Interface

* **Visual Style:**  A "Terminal Window" background metaphor.  
* **Integration:**  Form validation connected via emailjs-com.  
* **Feedback:**  Loading states ("Sending...") and success notifications.

#### 4\. Non-Functional Requirements: Performance and Optimization

In 3D web applications, performance is not a luxury; it is a core feature. High-fidelity models must not compromise the target 60fps framerate.

##### 4.1 Responsive 3D Logic and Loading

* **Dynamic Scaling:**  Implementation of the calculateSizes utility to adjust model scale/position for Mobile, Tablet, and Desktop.  
* **CanvasLoader:**  A percentage-based progress indicator using useProgress from @react-three/drei, formatted to two decimal places (e.g., progress.toFixed(2)).

##### 4.2 Texture and Model Optimization

* **Asset Pipeline:**  All models must be converted from  **GLTF to compressed .glb**  format to minimize payload.  
* **Debug Tooling:**  Utilize the  **Leva Debugger**  during development to precisely calibrate model scale, position, and rotation values for different breakpoints.

#### 5\. Development Roadmap: Antigravity IDE Agent Prompts

##### 5.1 Prompt 1: Initial Scaffolding and Environment

"Initialize a Vite \+ React project. Install three, @react-three/fiber, @react-three/drei, and gsap. Configure Tailwind CSS with the custom index.css utility classes: c-space, head-text, nav-ul, nav-li, and the waving-hand keyframes animation."

##### 5.2 Prompt 2: 3D Scene and Hero Component

"Create the Hero section. Load the HackerRoom model from /models/hacker-room.glb. Implement a PerspectiveCamera with a custom HeroCamera wrapper that uses useFrame to rotate the model based on state.pointer coordinates. Add the four floating corner elements with GSAP floating effects."

##### 5.3 Prompt 3: Bento Grid and Globe Integration

"Architect the About section using a 3x6 XL CSS Grid. In the third cell, integrate react-globe-gl. Use specific night-mode textures (globeImageUrl, bumpImageUrl) and configure a labelsData array to show your current location."

##### 5.4 Prompt 4: State-Managed Projects Section

"Build the Projects component using the myProjects constant. Implement useVideoTexture on the computer model’s screen. Add a GSAP animation that rotates the model on the Y-axis when the project index changes. Implement wrap-around logic for the navigation arrows."

##### 5.5 Prompt 5: Experience Section and Animation Controller

"Set up the Experience section. Load a Ready Player Me avatar and use the useAnimations hook with a groupRef. Implement Idle, Salute, Clapping, and Victory animations. Ensure all animation swaps use a 0.5s cross-fade duration triggered by onPointerOver events on the experience cards."

##### 5.6 Prompt 6: Contact Form and EmailJS Integration

"Create the terminal-style contact form. Implement the handleContact function using emailjs-com. Add form validation and a loading state for the submit button that displays 'Sending...' during the request."Adherence to this structured roadmap ensures the delivery of a professional, high-performance 3D portfolio ready for production deployment.  
