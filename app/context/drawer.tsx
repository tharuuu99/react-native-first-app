import { DrawerLayoutAndroid } from "react-native";
import React, { createContext, useRef } from "react";
import Nav from "@/layouts/nav";

interface IDrawerContext {
    drawer:React.RefObject<DrawerLayoutAndroid>|null;
}


// TypeScript interface defining the shape of the data stored in the context.
// Specifies that drawer is either:
// A React.RefObject of type DrawerLayoutAndroid, or
// null if the drawer is not available.


export const DrawerContext = createContext<IDrawerContext>({
    drawer:null//default value
});

// DrawerContext is created with a default value of { drawer: null }.
// This context will be used to share the drawer reference with components that need to interact with the DrawerLayoutAndroid.


const DrawerProvider = ({ children }: { children: React.JSX.Element }) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);//It uses the useRef hook to create a reference (drawer) for the DrawerLayoutAndroid. This reference will be shared across all child components.
//   The DrawerProvider is a context provider component that wraps your app or part of your app.
// It uses the useRef hook to create a reference (drawer) for the DrawerLayoutAndroid. This reference will be shared across all child components.
  
  
  
  return (
    <DrawerContext.Provider value={{ drawer }}>
      <DrawerLayoutAndroid ref={drawer} renderNavigationView={Nav} drawerWidth={300} drawerPosition='left'>
      {children}
      </DrawerLayoutAndroid>
    </DrawerContext.Provider>

// DrawerContext.Provider: This is the actual provider for the DrawerContext. It makes the drawer reference available to all child components through React's context system.
// {children}: The children prop represents any components wrapped inside the DrawerProvider. These components will have access to the drawer reference.


  );
};

export default DrawerProvider;


// Context Creation:

// The DrawerContext is created to share the drawer reference globally.
// DrawerProvider:

// Initializes the drawer reference using useRef.
// Passes this reference to the context so that any child component can access it.
// Children Components:

// Components wrapped by DrawerProvider can use the DrawerContext to access the drawer reference and interact with the DrawerLayoutAndroid.
