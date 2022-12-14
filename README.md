# example-shallow-mocked-directive

Repo serves to reproduce issue https://github.com/getsaf/shallow-render/issues/225. 
The repo was freshly created using this guide: https://angular.io/guide/creating-libraries

Steps to reproduce the issue:

- run `npm install`
- run `ng test`

The test for the `My`LibComponent` using the `MyDirectiveDirective` which should be mocked by `shallow-render` fails with:

```
Chrome 108.0.0.0 (Windows 10) MyLibComponent should create FAILED
        Error: NG0202: This constructor is not compatible with Angular Dependency Injection because its dependency at index 0 of the parameter list is invalid.
        This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

        Please check that 1) the type for the parameter at index 0 is correct and 2) the correct Angular decorators are defined for this class and its ancestors.
        error properties: Object({ code: 202 })
        Error: NG0202: This constructor is not compatible with Angular Dependency Injection because its dependency at index 0 of the parameter list is invalid.
        This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.
        Please check that 1) the type for the parameter at index 0 is correct and 2) the correct Angular decorators are defined for this class and its ancestors.
            at ɵɵinvalidFactoryDep (node_modules/@angular/core/fesm2020/core.mjs:4798:11)
            at NodeInjectorFactory.factory (ng:///MockOfMyDirectiveDirective/ɵfac.js:4:54)
            at getNodeInjectable (node_modules/@angular/core/fesm2020/core.mjs:3523:44)
            at instantiateAllDirectives (node_modules/@angular/core/fesm2020/core.mjs:12731:27)
            at createDirectivesInstances (node_modules/@angular/core/fesm2020/core.mjs:12155:5)
            at ɵɵelementStart (node_modules/@angular/core/fesm2020/core.mjs:15285:9)
            at templateFn (ng:///MyLibComponent.js:7:9)
            at executeTemplate (node_modules/@angular/core/fesm2020/core.mjs:12126:9)
            at renderView (node_modules/@angular/core/fesm2020/core.mjs:11948:13)
            at renderComponent (node_modules/@angular/core/fesm2020/core.mjs:13134:5)
Chrome 108.0.0.0 (Windows 10): Executed 3 of 3 (1 FAILED) (0.344 secs / 0.536 secs)
TOTAL: 1 FAILED, 2 SUCCESS
```


