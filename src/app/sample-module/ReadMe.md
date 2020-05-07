# SampleModule

SampleModule contains working examples of all the different techniques for building better angular framework.

## POCs
The POCs contained in this module are as follows:

- **Overriding default styles of external libraries**: Many Angular projects in the Aerolines (and also globally) use external component libraries like Angular-Material or PrimeNG. However there are cases when one has to override some of the default styling of the external components and since Angular scopes the styling of its components to its own host, hence in order to override some styling or even implement some custom style to such components the best (also the easiest) way to achieve this would be to use a global level scss/css file and use the styles to implement by scoping to the modules that would use such styles. The source for the POC can be found in OverridingExternalLibraryStyles folder.

- **App Shell**: I will not explain this much as there are plenty of explanations for app-shell online. You can use this to display some information before the application view loads. Simply update the content of app-shell with the default look and feel used in your project.
