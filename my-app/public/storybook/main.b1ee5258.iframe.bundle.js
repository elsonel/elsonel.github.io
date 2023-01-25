(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
  [179],
  {
    './src/UI/components/_overview/,Welcome/Welcome.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Welcome_stories;
          },
        });
      var _templateObject,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        FooterIconRow = __webpack_require__(
          './src/UI/components/groups/Footer/FooterIconRow/index.ts'
        ),
        Paragraph = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        TextLink = __webpack_require__(
          './src/UI/components/text/TextLink/index.ts'
        ),
        TextTitle = __webpack_require__(
          './src/UI/components/text/TextTitle/index.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Welcome = function Welcome(_ref) {
          var props = Object.assign({}, _ref);
          return (0, jsx_runtime.jsxs)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(TextTitle.w, {
                    size: 'small',
                    children:
                      "Welcome to Elson's Front-End Development Library!",
                  }),
                  (0, jsx_runtime.jsx)('br', {}),
                  (0, jsx_runtime.jsx)(Paragraph.n, {
                    children:
                      'Every React front-end component used to create my portfolio is contained in this library.',
                  }),
                  (0, jsx_runtime.jsx)('br', {}),
                  (0, jsx_runtime.jsx)(Paragraph.n, {
                    children:
                      'This is a completely independent project, each component was hand-coded from scratch and tested by me. Some components may lack proper documentation.',
                  }),
                  (0, jsx_runtime.jsx)('br', {}),
                  (0, jsx_runtime.jsx)(Paragraph.n, {
                    children: 'Feel free to browse around.',
                  }),
                  (0, jsx_runtime.jsx)('br', {}),
                  (0, jsx_runtime.jsx)('a', {
                    href: '/',
                    children: (0, jsx_runtime.jsx)(TextLink.h, {
                      children: 'Return to main site.',
                    }),
                  }),
                  (0, jsx_runtime.jsx)('br', {}),
                  (0, jsx_runtime.jsx)(FooterIconRow.f, {}),
                ],
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  padding: 20px;\n',
            ]))
        );
      try {
        (Welcome.displayName = 'Welcome'),
          (Welcome.__docgenInfo = {
            description: '',
            displayName: 'Welcome',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/_overview/,Welcome/Welcome.tsx#Welcome'
            ] = {
              docgenInfo: Welcome.__docgenInfo,
              name: 'Welcome',
              path: 'src/UI/components/_overview/,Welcome/Welcome.tsx#Welcome',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Welcome_stories = {
          title: 'Overview/Welcome',
          component: Welcome,
          args: {},
          argTypes: {},
        },
        Basic = function Template(args) {
          return (0, jsx_runtime.jsx)(Welcome, (0, objectSpread2.Z)({}, args));
        }.bind({});
      Basic.parameters = (0, objectSpread2.Z)(
        { storySource: { source: '(args) => <Welcome {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/_overview/Color/Colors.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Colors_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        Paragraph = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        TextTitle = __webpack_require__(
          './src/UI/components/text/TextTitle/index.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Colors = function Colors(_ref) {
          var props = Object.assign({}, _ref);
          return (0, jsx_runtime.jsx)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsxs)('div', {
                  children: [
                    (0, jsx_runtime.jsx)(TextTitle.w, {
                      size: 'small',
                      children: 'Colors',
                    }),
                    (0, jsx_runtime.jsx)('br', {}),
                    (0, jsx_runtime.jsx)(Grid, {
                      children: Object.keys(Theme.Q.color).map(function (
                        key,
                        i
                      ) {
                        return (0, jsx_runtime.jsxs)(
                          GridEntry,
                          {
                            children: [
                              (0, jsx_runtime.jsx)(GridEntryColor, {
                                $color: Theme.Q.color[key],
                              }),
                              (0, jsx_runtime.jsxs)(GridEntryText, {
                                children: [
                                  (0, jsx_runtime.jsx)(TextColor, {
                                    isWrapped: !1,
                                    children: key,
                                  }),
                                  (0, jsx_runtime.jsx)('br', {}),
                                  (0, jsx_runtime.jsx)(TextHex, {
                                    isWrapped: !1,
                                    children: Theme.Q.color[key],
                                  }),
                                ],
                              }),
                            ],
                          },
                          i
                        );
                      }),
                    }),
                    (0, jsx_runtime.jsx)('br', {}),
                  ],
                }),
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  padding: 20px;\n',
            ]))
        ),
        Grid = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n',
            ]))
        ),
        GridEntry = styled_components_browser_esm.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  flex-grow: 1;\n  flex-shrink: 0;\n  width: 100%;\n\n  display: flex;\n\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,\n    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;\n',
            ]))
        ),
        GridEntryColor = styled_components_browser_esm.ZP.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 50%;\n\n  background-color: ',
              ';\n',
            ])),
          function (_ref2) {
            return _ref2.$color;
          }
        ),
        GridEntryText = styled_components_browser_esm.ZP.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n\n  width: 50%;\n  padding: 10px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n',
            ]))
        ),
        TextColor = (0, styled_components_browser_esm.ZP)(Paragraph.n)(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.Z)([
              '\n  font-size: ',
              ';\n  font-weight: ',
              ';\n',
            ])),
          function (_ref3) {
            return _ref3.theme.font.default.size.large;
          },
          function (_ref4) {
            return _ref4.theme.font.default.weight.bold;
          }
        ),
        TextHex = (0, styled_components_browser_esm.ZP)(Paragraph.n)(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.Z)([
              '\n  font-size: ',
              ';\n  font-weight: ',
              ';\n',
            ])),
          function (_ref5) {
            return _ref5.theme.font.default.size.small;
          },
          function (_ref6) {
            return _ref6.theme.font.default.weight.light;
          }
        );
      try {
        (Colors.displayName = 'Colors'),
          (Colors.__docgenInfo = {
            description: '',
            displayName: 'Colors',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/_overview/Color/Colors.tsx#Colors'
            ] = {
              docgenInfo: Colors.__docgenInfo,
              name: 'Colors',
              path: 'src/UI/components/_overview/Color/Colors.tsx#Colors',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Colors_stories = {
          title: 'Overview/Colors',
          component: Colors,
          args: {},
          argTypes: {},
        },
        Basic = function Template(args) {
          return (0, jsx_runtime.jsx)(Colors, (0, objectSpread2.Z)({}, args));
        }.bind({});
      Basic.parameters = (0, objectSpread2.Z)(
        { storySource: { source: '(args) => <Colors {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/_overview/Typography/Typography.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
            default: function () {
              return Typography_stories;
            },
          });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          _templateObject4,
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          styled_components_browser_esm =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          Paragraph = __webpack_require__(
            './src/UI/components/text/Paragraph/index.ts'
          ),
          TextTitle = __webpack_require__(
            './src/UI/components/text/TextTitle/index.ts'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          Typography = function Typography(_ref) {
            var props = Object.assign({}, _ref);
            return (0, jsx_runtime.jsxs)(
              Wrapper,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, props),
                {},
                {
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)(TextTitle.w, {
                          size: 'small',
                          children: 'Typeface',
                        }),
                        (0, jsx_runtime.jsx)('br', {}),
                        (0, jsx_runtime.jsxs)(Paragraph.n, {
                          weight: 'bold2',
                          children: ['The font used is ', Theme.Q.font.family],
                        }),
                        (0, jsx_runtime.jsx)('br', {}),
                        (0, jsx_runtime.jsx)(Paragraph.n, {
                          children:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis quam nec mauris vehicula ultricies. In tempus velit vel sem porttitor tincidunt. Curabitur et mauris id dui condimentum cursus. Etiam id hendrerit mauris, et commodo lorem. Mauris iaculis orci nisi. Proin efficitur, ex sit amet efficitur tristique, elit ante tempor enim, sit amet finibus tellus tortor at metus. Nullam malesuada turpis ac risus consectetur dignissim. Proin orci ligula, lacinia in ultrices vel, aliquam non lectus.',
                        }),
                        (0, jsx_runtime.jsx)('br', {}),
                        (0, jsx_runtime.jsx)(Paragraph.n, {
                          children: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                        }),
                        (0, jsx_runtime.jsx)(Paragraph.n, {
                          children: 'abcdefghijklmnopqrstuvwxyz',
                        }),
                        (0, jsx_runtime.jsx)(Paragraph.n, {
                          children: '1234567890 !@£$% &*()+ -–—“” ‘’?/',
                        }),
                        (0, jsx_runtime.jsx)('br', {}),
                      ],
                    }),
                    (0, jsx_runtime.jsx)('br', {}),
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)(TextTitle.w, {
                          size: 'small',
                          children: 'Weight',
                        }),
                        (0, jsx_runtime.jsx)('br', {}),
                        (0, jsx_runtime.jsx)(Grid, {
                          children: Object.keys(Theme.Q.font.weight).map(
                            function (e) {
                              return (0, jsx_runtime.jsxs)(GridEntry, {
                                children: [
                                  (0, jsx_runtime.jsx)(Paragraph.n, {
                                    weight: e,
                                    children: 'HELLO Hello',
                                  }),
                                  (0, jsx_runtime.jsx)('br', {}),
                                  (0, jsx_runtime.jsx)(TextLight, {
                                    children: e,
                                  }),
                                ],
                              });
                            }
                          ),
                        }),
                        (0, jsx_runtime.jsx)('br', {}),
                      ],
                    }),
                    (0, jsx_runtime.jsx)('br', {}),
                    (0, jsx_runtime.jsxs)('div', {
                      children: [
                        (0, jsx_runtime.jsx)(TextTitle.w, {
                          size: 'small',
                          children: 'Size',
                        }),
                        (0, jsx_runtime.jsx)('br', {}),
                        (0, jsx_runtime.jsx)(Grid, {
                          children: Object.keys(Theme.Q.font.size).map(
                            function (e) {
                              return (0, jsx_runtime.jsxs)(GridEntry, {
                                children: [
                                  (0, jsx_runtime.jsx)(Paragraph.n, {
                                    size: e,
                                    children: 'Aa',
                                  }),
                                  (0, jsx_runtime.jsx)('br', {}),
                                  (0, jsx_runtime.jsx)(TextLight, {
                                    children: e,
                                  }),
                                ],
                              });
                            }
                          ),
                        }),
                        (0, jsx_runtime.jsx)('br', {}),
                      ],
                    }),
                    (0, jsx_runtime.jsx)('br', {}),
                  ],
                }
              )
            );
          },
          Wrapper = styled_components_browser_esm.ZP.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  box-sizing: border-box;\n  padding: 20px;\n',
              ]))
          ),
          Grid = styled_components_browser_esm.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.Z)([
                '\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n',
              ]))
          ),
          GridEntry = styled_components_browser_esm.ZP.div(
            _templateObject3 ||
              (_templateObject3 = (0, taggedTemplateLiteral.Z)([
                '\n  flex-grow: 1;\n  flex-shrink: 0;\n  width: 120px;\n  height: 120px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,\n    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;\n',
              ]))
          ),
          TextLight = (0, styled_components_browser_esm.ZP)(Paragraph.n)(
            _templateObject4 ||
              (_templateObject4 = (0, taggedTemplateLiteral.Z)([
                '\n  color: ',
                ';\n',
              ])),
            function (_ref2) {
              return _ref2.theme.color.textNeutral;
            }
          );
        try {
          (Typography.displayName = 'Typography'),
            (Typography.__docgenInfo = {
              description: '',
              displayName: 'Typography',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/_overview/Typography/Typography.tsx#Typography'
              ] = {
                docgenInfo: Typography.__docgenInfo,
                name: 'Typography',
                path: 'src/UI/components/_overview/Typography/Typography.tsx#Typography',
              });
        } catch (__react_docgen_typescript_loader_error) {}
        var Typography_stories = {
            title: 'Overview/Typography',
            component: Typography,
            args: {},
            argTypes: {},
          },
          Basic = function Template(args) {
            return (0, jsx_runtime.jsx)(
              Typography,
              (0, objectSpread2.Z)({}, args)
            );
          }.bind({});
        Basic.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Typography {...args} />' } },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/atoms/DiamondLabel/DiamondLabel.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Active: function () {
              return Active;
            },
            Neutral: function () {
              return Neutral;
            },
            SemiActive: function () {
              return SemiActive;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var _templateObject,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          _DiamondLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/atoms/DiamondLabel/DiamondLabel.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          Padding = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                ['\n  padding: 100px;\n']
              ))
          );
        __webpack_exports__.default = {
          title: 'Atoms/DiamondLabel',
          component: _DiamondLabel__WEBPACK_IMPORTED_MODULE_0__.f,
          args: {
            size: 8,
            label: 'OVERVIEW',
            state: _DiamondLabel__WEBPACK_IMPORTED_MODULE_0__.Z.NEUTRAL,
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              Padding,
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _DiamondLabel__WEBPACK_IMPORTED_MODULE_0__.f,
                  (0,
                  C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    {},
                    args
                  )
                ),
              }
            );
          },
          Neutral = Template.bind({}),
          SemiActive = Template.bind({});
        SemiActive.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {},
            SemiActive.args
          ),
          {},
          { state: _DiamondLabel__WEBPACK_IMPORTED_MODULE_0__.Z.SEMIACTIVE }
        );
        var Active = Template.bind({});
        (Active.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {},
            Active.args
          ),
          {},
          { state: _DiamondLabel__WEBPACK_IMPORTED_MODULE_0__.Z.ACTIVE }
        )),
          (Neutral.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {
              storySource: {
                source:
                  '(args) => (\n  <Padding>\n    <DiamondLabel {...args} />\n  </Padding>\n)',
              },
            },
            Neutral.parameters
          )),
          (SemiActive.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {
              storySource: {
                source:
                  '(args) => (\n  <Padding>\n    <DiamondLabel {...args} />\n  </Padding>\n)',
              },
            },
            SemiActive.parameters
          )),
          (Active.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {
              storySource: {
                source:
                  '(args) => (\n  <Padding>\n    <DiamondLabel {...args} />\n  </Padding>\n)',
              },
            },
            Active.parameters
          ));
        var __namedExportsOrder = ['Neutral', 'SemiActive', 'Active'];
      },
    './src/UI/components/atoms/Fact/Fact.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AlwaysWrapped: function () {
            return AlwaysWrapped;
          },
          Basic: function () {
            return Basic;
          },
          Link: function () {
            return Link;
          },
          LongText: function () {
            return LongText;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _inputs_LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './src/UI/components/inputs/LinkExternalFactText/index.ts'
          ),
        _Fact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/atoms/Fact/Fact.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Atoms/Fact',
        component: _Fact__WEBPACK_IMPORTED_MODULE_1__.z,
        args: {
          label: 'COLLABORATORS',
          value: 'Elson Liang, Xavier Woo, Perry Wang',
          isAlwaysWrapped: !1,
        },
        argTypes: { onClick: { action: 'clicked' } },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _Fact__WEBPACK_IMPORTED_MODULE_1__.z,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        },
        Basic = Template.bind({}),
        LongText = Template.bind({});
      LongText.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          LongText.args
        ),
        {},
        {
          label:
            'A VERY VERY VERY VERY VERY VERY LONG TITLE FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
          value:
            'There are lots and lots and lots and lots and lots and lots of text here. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
        }
      );
      var Link = Template.bind({});
      Link.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Link.args
        ),
        {},
        {
          label: 'GITHUB',
          value: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _inputs_LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__.o,
            {
              link: '/',
              children:
                'Click here to go to website! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
            }
          ),
        }
      );
      var AlwaysWrapped = Template.bind({});
      (AlwaysWrapped.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          AlwaysWrapped.args
        ),
        {},
        { isAlwaysWrapped: !0 }
      )),
        (Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <Fact {...args} />' } },
          Basic.parameters
        )),
        (LongText.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <Fact {...args} />' } },
          LongText.parameters
        )),
        (Link.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <Fact {...args} />' } },
          Link.parameters
        )),
        (AlwaysWrapped.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <Fact {...args} />' } },
          AlwaysWrapped.parameters
        ));
      var __namedExportsOrder = ['Basic', 'LongText', 'Link', 'AlwaysWrapped'];
    },
    './src/UI/components/atoms/GalleryProjectPanel/GalleryProjectPanel.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _inputs_LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/inputs/LinkExternalFactText/index.ts'
            ),
          _GalleryProjectPanel__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './src/UI/components/atoms/GalleryProjectPanel/GalleryProjectPanel.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/GalleryProjectPanel',
          component: _GalleryProjectPanel__WEBPACK_IMPORTED_MODULE_1__.c,
          args: {
            titleSize: 'large',
            title: 'SPOTLIGHT',
            subtitle: 'Media Streaming Platform',
            body: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare ligula a massa congue tempus. Vestibulum molestie efficitur risus, in commodo leo fringilla ut. Maecenas blandit nunc in purus rhoncus maximus efficitur eu ligula. Nam ullamcorper rhoncus luctus. Donec consectetur eget enim vel imperdiet. Suspendisse ut enim sit amet urna scelerisque gravida.',
              'In in urna sed elit sollicitudin ultrices. Aenean quis eros et augue congue tempor. Maecenas vel ornare magna, sit amet luctus lorem. Curabitur nisi felis, maximus at erat quis, rutrum interdum lectus. Aliquam vel enim sit amet lectus ullamcorper dignissim',
            ],
            facts: [
              { label: 'TYPE', value: 'Mobile Application' },
              { label: 'COMPLETION', value: 'June 2022' },
              {
                label: 'COLLABORATORS',
                value: 'Elson Liang, Xavier Woo, Perry Wang',
              },
              {
                label: 'GITHUB',
                value: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _inputs_LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__.o,
                  { children: 'Link', link: '/' }
                ),
              },
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _GalleryProjectPanel__WEBPACK_IMPORTED_MODULE_1__.c,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <GalleryProjectPanel {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/atoms/HorizontalBulletMenu/HorizontalBulletMenu.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _HorizontalBulletMenu__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/atoms/HorizontalBulletMenu/HorizontalBulletMenu.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/HorizontalBulletMenu',
          component: _HorizontalBulletMenu__WEBPACK_IMPORTED_MODULE_0__.F,
          args: {
            tabs: [
              { onClick: function onClick() {}, isSelected: !0 },
              { onClick: function onClick() {}, isSelected: !1 },
              { onClick: function onClick() {}, isSelected: !1 },
              { onClick: function onClick() {}, isSelected: !1 },
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _HorizontalBulletMenu__WEBPACK_IMPORTED_MODULE_0__.F,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        }.bind({});
        (Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Basic.parameters
          ),
          {},
          { backgrounds: { default: 'dark' } }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <HorizontalBulletMenu {...args} />\n)',
              },
            },
            Basic.parameters
          ));
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/atoms/IIconImage/IIconImage.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: function () {
            return Large;
          },
          NarrowIcon: function () {
            return NarrowIcon;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return IIconImage_stories;
          },
        });
      var _templateObject,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        IIcon = __webpack_require__('./src/UI/components/atoms/IIcon/index.ts'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['src'],
        IIconImage = function IIconImage(_ref) {
          var src = _ref.src,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            IIcon.C,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsx)(StyledImg, {
                  alt: src,
                  src: src,
                }),
              }
            )
          );
        },
        StyledImg = styled_components_browser_esm.ZP.img(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n  height: 100%;\n\n  object-fit: contain;\n  user-select: none;\n',
            ]))
        );
      try {
        (IIconImage.displayName = 'IIconImage'),
          (IIconImage.__docgenInfo = {
            description: '',
            displayName: 'IIconImage',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !0,
                type: { name: 'string' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string | number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/IIconImage/IIconImage.tsx#IIconImage'
            ] = {
              docgenInfo: IIconImage.__docgenInfo,
              name: 'IIconImage',
              path: 'src/UI/components/atoms/IIconImage/IIconImage.tsx#IIconImage',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var IIconImage_stories = {
          title: 'Atoms/IIconImage',
          component: IIconImage,
          args: { size: 32, src: Theme.Q.icon.exampleIconColored },
          argTypes: {},
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(
            IIconImage,
            (0, objectSpread2.Z)({}, args)
          );
        },
        Small = Template.bind({});
      Small.args = (0, objectSpread2.Z)({}, Small.args);
      var Large = Template.bind({});
      Large.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Large.args),
        {},
        { size: 64 }
      );
      var NarrowIcon = Template.bind({});
      (NarrowIcon.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, NarrowIcon.args),
        {},
        { size: 64, src: Theme.Q.icon.exampleIconThin }
      )),
        (Small.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <IIconImage {...args} />' } },
          Small.parameters
        )),
        (Large.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <IIconImage {...args} />' } },
          Large.parameters
        )),
        (NarrowIcon.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <IIconImage {...args} />' } },
          NarrowIcon.parameters
        ));
      var __namedExportsOrder = ['Small', 'Large', 'NarrowIcon'];
    },
    './src/UI/components/atoms/IIconSVG/IIconSVG.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Colored: function () {
            return Colored;
          },
          Large: function () {
            return Large;
          },
          NarrowIcon: function () {
            return NarrowIcon;
          },
          Small: function () {
            return Small;
          },
          StyledColored: function () {
            return StyledColored;
          },
          StyledLarge: function () {
            return StyledLarge;
          },
          StyledNarrowIcon: function () {
            return StyledNarrowIcon;
          },
          StyledSmall: function () {
            return StyledSmall;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        styled_icons_bootstrap__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/@styled-icons/bootstrap/ArrowDown/ArrowDown.esm.js'
          ),
        styled_icons_fa_brands__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/@styled-icons/fa-brands/Github/Github.esm.js'
          ),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        _IIconSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/atoms/IIconSVG/IIconSVG.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Atoms/IIconSVG',
        component: _IIconSVG__WEBPACK_IMPORTED_MODULE_1__.$,
        args: {
          size: 32,
          src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__.Q.icon
            .exampleIconBasic,
        },
        argTypes: {},
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _IIconSVG__WEBPACK_IMPORTED_MODULE_1__.$,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        },
        Small = Template.bind({});
      Small.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        {},
        Small.args
      );
      var Large = Template.bind({});
      Large.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Large.args
        ),
        {},
        { size: 64 }
      );
      var NarrowIcon = Template.bind({});
      NarrowIcon.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          NarrowIcon.args
        ),
        {},
        {
          src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__.Q.icon
            .exampleIconThin,
        }
      );
      var Colored = Template.bind({});
      Colored.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Colored.args
        ),
        {},
        { color: 'red' }
      );
      var StyledSmall = Template.bind({});
      StyledSmall.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          StyledSmall.args
        ),
        {},
        { src: styled_icons_fa_brands__WEBPACK_IMPORTED_MODULE_4__.E }
      );
      var StyledLarge = Template.bind({});
      StyledLarge.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          StyledLarge.args
        ),
        {},
        { size: 64, src: styled_icons_fa_brands__WEBPACK_IMPORTED_MODULE_4__.E }
      );
      var StyledNarrowIcon = Template.bind({});
      StyledNarrowIcon.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          StyledNarrowIcon.args
        ),
        {},
        { src: styled_icons_bootstrap__WEBPACK_IMPORTED_MODULE_5__.K }
      );
      var StyledColored = Template.bind({});
      (StyledColored.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          StyledColored.args
        ),
        {},
        {
          color: 'red',
          src: styled_icons_fa_brands__WEBPACK_IMPORTED_MODULE_4__.E,
        }
      )),
        (Small.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <IIconSVG {...args} />' } },
          Small.parameters
        )),
        (Large.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <IIconSVG {...args} />' } },
          Large.parameters
        )),
        (NarrowIcon.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <IIconSVG {...args} />' } },
          NarrowIcon.parameters
        )),
        (Colored.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <IIconSVG {...args} />' } },
          Colored.parameters
        )),
        (StyledSmall.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <IIconSVG {...args} />' } },
          StyledSmall.parameters
        )),
        (StyledLarge.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <IIconSVG {...args} />' } },
          StyledLarge.parameters
        )),
        (StyledNarrowIcon.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <IIconSVG {...args} />' } },
          StyledNarrowIcon.parameters
        )),
        (StyledColored.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <IIconSVG {...args} />' } },
          StyledColored.parameters
        ));
      var __namedExportsOrder = [
        'Small',
        'Large',
        'NarrowIcon',
        'Colored',
        'StyledSmall',
        'StyledLarge',
        'StyledNarrowIcon',
        'StyledColored',
      ];
    },
    './src/UI/components/atoms/IIcon/IIcon.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: function () {
            return Large;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _IIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/atoms/IIcon/IIcon.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Atoms/IIcon',
        component: _IIcon__WEBPACK_IMPORTED_MODULE_0__.C,
        args: { size: 32, children: 'Hello' },
        argTypes: {},
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _IIcon__WEBPACK_IMPORTED_MODULE_0__.C,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        },
        Small = Template.bind({});
      Small.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        {},
        Small.args
      );
      var Large = Template.bind({});
      (Large.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Large.args
        ),
        {},
        { size: 64 }
      )),
        (Small.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <IIcon {...args} />' } },
          Small.parameters
        )),
        (Large.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <IIcon {...args} />' } },
          Large.parameters
        ));
      var __namedExportsOrder = ['Small', 'Large'];
    },
    './src/UI/components/atoms/IconLoading/IconLoading.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _IconLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/atoms/IconLoading/IconLoading.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Atoms/IconLoading',
        component: _IconLoading__WEBPACK_IMPORTED_MODULE_0__.y,
        args: { size: 128 },
        argTypes: {},
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconLoading__WEBPACK_IMPORTED_MODULE_0__.y,
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            args
          )
        );
      }.bind({});
      Basic.parameters = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        { storySource: { source: '(args) => <IconLoading {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/atoms/IconScroll/IconScroll.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _IconScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/atoms/IconScroll/IconScroll.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Atoms/IconScroll',
        component: _IconScroll__WEBPACK_IMPORTED_MODULE_0__.e,
        args: { color: 'gray', size: 32 },
        argTypes: {},
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _IconScroll__WEBPACK_IMPORTED_MODULE_0__.e,
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            args
          )
        );
      }.bind({});
      Basic.parameters = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        { storySource: { source: '(args) => <IconScroll {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/atoms/ImageThumbnailFixed/ImageThumbnailFixed.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Landscape: function () {
              return Landscape;
            },
            Portrait: function () {
              return Portrait;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
            default: function () {
              return ImageThumbnailFixed_stories;
            },
          });
        var objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          scripts_Array =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__('./src/UI/utility/scripts/Array.ts')),
          ImageThumbnail = __webpack_require__(
            './src/UI/components/atoms/ImageThumbnail/index.ts'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['imageWidth', 'imageHeight'],
          Aspects = {
            SQUARE: 1,
            WIDE1: 1.5,
            WIDE2: 1.4,
            WIDE3: 4 / 3,
            WIDE4: 5 / 4,
            SCREEN: 16 / 9,
          };
        var ImageThumbnailFixed = function ImageThumbnailFixed(_ref) {
          var width,
            height,
            isFlipped,
            closestAspect,
            imageWidth = _ref.imageWidth,
            imageHeight = _ref.imageHeight,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          if (imageWidth <= 0 || imageHeight <= 0)
            throw 'Invalid image dimensions';
          return (0, jsx_runtime.jsx)(
            ImageThumbnail.l,
            (0, objectSpread2.Z)(
              {
                imageWidth:
                  ((width = imageWidth),
                  (height = imageHeight),
                  (isFlipped = height > width),
                  (closestAspect = (0, scripts_Array.sY)(
                    Object.values(Aspects),
                    isFlipped ? height / width : width / height
                  )),
                  isFlipped ? 1 / closestAspect : closestAspect),
                imageHeight: 1,
              },
              props
            )
          );
        };
        try {
          (ImageThumbnailFixed.displayName = 'ImageThumbnailFixed'),
            (ImageThumbnailFixed.__docgenInfo = {
              description: '',
              displayName: 'ImageThumbnailFixed',
              props: {
                imageWidth: {
                  defaultValue: null,
                  description: 'Image width',
                  name: 'imageWidth',
                  required: !0,
                  type: { name: 'number' },
                },
                imageHeight: {
                  defaultValue: null,
                  description: 'Image height',
                  name: 'imageHeight',
                  required: !0,
                  type: { name: 'number' },
                },
                src: {
                  defaultValue: null,
                  description: 'The image source',
                  name: 'src',
                  required: !0,
                  type: { name: 'string' },
                },
                title: {
                  defaultValue: null,
                  description: 'The image title',
                  name: 'title',
                  required: !1,
                  type: { name: 'string' },
                },
                subtitle: {
                  defaultValue: null,
                  description: 'The image subtitle',
                  name: 'subtitle',
                  required: !1,
                  type: { name: 'string' },
                },
                isTitleVisible: {
                  defaultValue: null,
                  description:
                    'If the title is always visible or only visible on hover',
                  name: 'isTitleVisible',
                  required: !1,
                  type: { name: 'boolean' },
                },
                containerSize: {
                  defaultValue: null,
                  description: 'Maximum container size',
                  name: 'containerSize',
                  required: !1,
                  type: { name: 'string | number' },
                },
                onClick: {
                  defaultValue: null,
                  description: 'Action onclick',
                  name: 'onClick',
                  required: !1,
                  type: { name: '(() => void)' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/ImageThumbnailFixed/ImageThumbnailFixed.tsx#ImageThumbnailFixed'
              ] = {
                docgenInfo: ImageThumbnailFixed.__docgenInfo,
                name: 'ImageThumbnailFixed',
                path: 'src/UI/components/atoms/ImageThumbnailFixed/ImageThumbnailFixed.tsx#ImageThumbnailFixed',
              });
        } catch (__react_docgen_typescript_loader_error) {}
        var ImageThumbnailFixed_stories = {
            title: 'Atoms/ImageThumbnailFixed',
            component: ImageThumbnailFixed,
            args: {
              src: Theme.Q.image.exampleLandscape,
              title: 'SOARING SKIES',
              subtitle: '2020',
              isTitleVisible: !1,
              containerSize: 500,
              imageWidth: 200,
              imageHeight: 100,
            },
            argTypes: { onClick: { action: 'clicked' } },
          },
          Template = function Template(args) {
            return (0, jsx_runtime.jsx)(
              ImageThumbnailFixed,
              (0, objectSpread2.Z)({}, args)
            );
          },
          Landscape = Template.bind({}),
          Portrait = Template.bind({});
        (Portrait.args = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Portrait.args),
          {},
          { imageWidth: 100, imageHeight: 200 }
        )),
          (Landscape.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ImageThumbnailFixed {...args} />\n)',
              },
            },
            Landscape.parameters
          )),
          (Portrait.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ImageThumbnailFixed {...args} />\n)',
              },
            },
            Portrait.parameters
          ));
        var __namedExportsOrder = ['Landscape', 'Portrait'];
      },
    './src/UI/components/atoms/ImageThumbnail/ImageThumbnail.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            DifferentAspect: function () {
              return DifferentAspect;
            },
            DifferentContainerSize: function () {
              return DifferentContainerSize;
            },
            LongText: function () {
              return LongText;
            },
            VisibleTitle: function () {
              return VisibleTitle;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          _ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/atoms/ImageThumbnail/ImageThumbnail.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/ImageThumbnail',
          component: _ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
          args: {
            src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__.Q.image
              .exampleSquare,
            title: 'SOARING SKIES',
            subtitle: '2020',
            isTitleVisible: !1,
            containerSize: 300,
            imageWidth: 100,
            imageHeight: 100,
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({}),
          VisibleTitle = Template.bind({});
        VisibleTitle.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            VisibleTitle.args
          ),
          {},
          { isTitleVisible: !0 }
        );
        var LongText = Template.bind({});
        LongText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            LongText.args
          ),
          {},
          {
            isTitleVisible: !0,
            title: 'SOARING SKIESSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
            subtitle: '202000000000000000000000000000000000000',
          }
        );
        var DifferentContainerSize = Template.bind({});
        DifferentContainerSize.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            DifferentContainerSize.args
          ),
          {},
          { containerSize: 400 }
        );
        var DifferentAspect = Template.bind({});
        (DifferentAspect.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            DifferentAspect.args
          ),
          {},
          { imageWidth: 100, imageHeight: 200 }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ImageThumbnail {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (VisibleTitle.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ImageThumbnail {...args} />\n)',
              },
            },
            VisibleTitle.parameters
          )),
          (LongText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ImageThumbnail {...args} />\n)',
              },
            },
            LongText.parameters
          )),
          (DifferentContainerSize.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ImageThumbnail {...args} />\n)',
              },
            },
            DifferentContainerSize.parameters
          )),
          (DifferentAspect.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ImageThumbnail {...args} />\n)',
              },
            },
            DifferentAspect.parameters
          ));
        var __namedExportsOrder = [
          'Basic',
          'VisibleTitle',
          'LongText',
          'DifferentContainerSize',
          'DifferentAspect',
        ];
      },
    './src/UI/components/atoms/ImageTitle/ImageTitle.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Medium: function () {
            return Medium;
          },
          NoSubtitle: function () {
            return NoSubtitle;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        _ImageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/atoms/ImageTitle/ImageTitle.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Atoms/ImageTitle',
        component: _ImageTitle__WEBPACK_IMPORTED_MODULE_1__.Y,
        args: {
          title: 'SPOTLIGHT',
          subtitle: 'Media Streaming Platform',
          color:
            _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__.Q.color.text,
          size: 'small',
        },
        argTypes: {},
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _ImageTitle__WEBPACK_IMPORTED_MODULE_1__.Y,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        },
        Small = Template.bind({}),
        Medium = Template.bind({});
      Medium.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Medium.args
        ),
        {},
        { size: 'medium' }
      );
      var NoSubtitle = Template.bind({});
      (NoSubtitle.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          NoSubtitle.args
        ),
        {},
        { subtitle: void 0 }
      )),
        (Small.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <ImageTitle {...args} />' } },
          Small.parameters
        )),
        (Medium.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <ImageTitle {...args} />' } },
          Medium.parameters
        )),
        (NoSubtitle.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <ImageTitle {...args} />' } },
          NoSubtitle.parameters
        ));
      var __namedExportsOrder = ['Small', 'Medium', 'NoSubtitle'];
    },
    './src/UI/components/atoms/Image/Image.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/atoms/Image/Image.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Atoms/Image',
        component: _Image__WEBPACK_IMPORTED_MODULE_1__.E,
        args: {
          src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__.Q.image
            .exampleLandscape,
        },
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _Image__WEBPACK_IMPORTED_MODULE_1__.E,
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            args
          )
        );
      }.bind({});
      Basic.parameters = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        { storySource: { source: '(args) => <Image {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/atoms/PageTitle/PageTitle.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return PageTitle_stories;
          },
        });
      var _templateObject,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        TextTitle = __webpack_require__(
          './src/UI/components/text/TextTitle/index.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children'],
        PageTitle = function PageTitle(_ref) {
          var children = _ref.children,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsx)(TextTitle.w, {
                  isWrapped: !1,
                  children: children,
                }),
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  padding: 20px;\n',
            ]))
        );
      try {
        (PageTitle.displayName = 'PageTitle'),
          (PageTitle.__docgenInfo = {
            description: '',
            displayName: 'PageTitle',
            props: {
              children: {
                defaultValue: null,
                description: 'The title',
                name: 'children',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/PageTitle/PageTitle.tsx#PageTitle'
            ] = {
              docgenInfo: PageTitle.__docgenInfo,
              name: 'PageTitle',
              path: 'src/UI/components/atoms/PageTitle/PageTitle.tsx#PageTitle',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var PageTitle_stories = {
          title: 'Atoms/PageTitle',
          component: PageTitle,
          args: { children: 'GALLERY' },
          argTypes: {},
        },
        Basic = function Template(args) {
          return (0, jsx_runtime.jsx)(
            PageTitle,
            (0, objectSpread2.Z)({}, args)
          );
        }.bind({});
      Basic.parameters = (0, objectSpread2.Z)(
        { storySource: { source: '(args) => <PageTitle {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/atoms/ProgressLine/ProgressLine.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            Basic2: function () {
              return Basic2;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__('./src/UI/utility/themes/Theme.ts')),
          _ProgressLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/UI/components/atoms/ProgressLine/ProgressLine.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/ProgressLine',
          component: _ProgressLine__WEBPACK_IMPORTED_MODULE_2__.C,
          args: {
            lineStart: 0,
            lineWidth: 100,
            backLineColor:
              _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                .outline,
            frontLineColor:
              _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color.text,
          },
          argTypes: {},
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _ProgressLine__WEBPACK_IMPORTED_MODULE_2__.C,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({});
        Basic.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Basic.args
        );
        var Basic2 = Template.bind({});
        (Basic2.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {},
            Basic2.args
          ),
          {},
          { lineStart: 100 }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            { storySource: { source: '(args) => <ProgressLine {...args} />' } },
            Basic.parameters
          )),
          (Basic2.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            { storySource: { source: '(args) => <ProgressLine {...args} />' } },
            Basic2.parameters
          ));
        var __namedExportsOrder = ['Basic', 'Basic2'];
      },
    './src/UI/components/atoms/ProjectLanding/ProjectLanding.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            ContainedImage: function () {
              return ContainedImage;
            },
            LongText: function () {
              return LongText;
            },
            NoText: function () {
              return NoText;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          _ProjectLanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/atoms/ProjectLanding/ProjectLanding.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/ProjectLanding',
          component: _ProjectLanding__WEBPACK_IMPORTED_MODULE_1__.y,
          args: {
            src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__.Q.image
              .exampleSquare,
            subtitle: 'UI / UX',
            title: 'SPOTLIGHT',
            isContained: !1,
            textColor: 'white',
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _ProjectLanding__WEBPACK_IMPORTED_MODULE_1__.y,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({}),
          LongText = Template.bind({});
        LongText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            LongText.args
          ),
          {},
          {
            subtitle:
              'A VERY VERY VERY VERY VERY VERY LONG TITLE FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            title:
              'There are lots and lots and lots and lots and lots and lots of text here. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
          }
        );
        var NoText = Template.bind({});
        NoText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            NoText.args
          ),
          {},
          { subtitle: void 0, title: void 0 }
        );
        var ContainedImage = Template.bind({});
        (ContainedImage.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            ContainedImage.args
          ),
          {},
          { isContained: !0, textColor: 'black' }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectLanding {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (LongText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectLanding {...args} />\n)',
              },
            },
            LongText.parameters
          )),
          (NoText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectLanding {...args} />\n)',
              },
            },
            NoText.parameters
          )),
          (ContainedImage.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectLanding {...args} />\n)',
              },
            },
            ContainedImage.parameters
          ));
        var __namedExportsOrder = [
          'Basic',
          'LongText',
          'NoText',
          'ContainedImage',
        ];
      },
    './src/UI/components/atoms/ProjectMenuHorizontal/ProjectMenuHorizontal.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            NoTabs: function () {
              return NoTabs;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _ProjectMenuHorizontal__WEBPACK_IMPORTED_MODULE_1__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './src/UI/components/atoms/ProjectMenuHorizontal/ProjectMenuHorizontal.tsx'
            )),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/ProjectMenuHorizontal',
          component: _ProjectMenuHorizontal__WEBPACK_IMPORTED_MODULE_1__.p,
          args: {
            tabs: [
              {
                label: 'OVERVIEW',
                isActive: !0,
                onClick: function onClick() {},
              },
              {
                label: 'GALLERY',
                isActive: !0,
                onClick: function onClick() {},
              },
              { label: 'GOALS', isActive: !0, onClick: function onClick() {} },
              {
                label: 'PROCESS',
                isActive: !1,
                onClick: function onClick() {},
              },
              {
                label: 'FINAL PRODUCT',
                isActive: !1,
                onClick: function onClick() {},
              },
              {
                label: 'REFLECTION',
                isActive: !1,
                onClick: function onClick() {},
              },
            ],
            progress: 0.25,
          },
          argTypes: {},
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _ProjectMenuHorizontal__WEBPACK_IMPORTED_MODULE_1__.p,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({});
        Basic.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Basic.args
        );
        var NoTabs = Template.bind({});
        (NoTabs.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            NoTabs.args
          ),
          {},
          { tabs: [] }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectMenuHorizontal {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (NoTabs.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectMenuHorizontal {...args} />\n)',
              },
            },
            NoTabs.parameters
          ));
        var __namedExportsOrder = ['Basic', 'NoTabs'];
      },
    './src/UI/components/atoms/ProjectMenu/ProjectMenu.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          LongText: function () {
            return LongText;
          },
          NoText: function () {
            return NoText;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return ProjectMenu_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        Paragraph = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['tabs', 'isVisible', 'subtitle', 'title'],
        ProjectMenu = function ProjectMenu(_ref) {
          var tabs = _ref.tabs,
            _ref$isVisible = _ref.isVisible,
            isVisible = void 0 === _ref$isVisible || _ref$isVisible,
            _ref$subtitle = _ref.subtitle,
            subtitle = void 0 === _ref$subtitle ? '' : _ref$subtitle,
            _ref$title = _ref.title,
            title = void 0 === _ref$title ? '' : _ref$title,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsxs)(Contents, {
                  $isVisible: isVisible,
                  children: [
                    (0, jsx_runtime.jsx)(Subtitle, { children: subtitle }),
                    (0, jsx_runtime.jsx)(Title, { children: title }),
                    (0, jsx_runtime.jsx)(TabWrapper, {
                      children: tabs.map(function (e, i) {
                        return (0,
                        jsx_runtime.jsxs)(TabRow, { $index: i, $isVisible: isVisible, onClick: e.onClick, children: [(0, jsx_runtime.jsx)(TabBullet, { $isSelected: e.isSelected }), (0, jsx_runtime.jsx)(TabText, { $isSelected: e.isSelected, children: e.label })] }, i);
                      }),
                    }),
                  ],
                }),
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n\n  width: 240px;\n  padding: 20px;\n',
            ]))
        ),
        Contents = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n\n  transform: ',
              ';\n  opacity: ',
              ';\n  pointer-events: ',
              ';\n  transition: ',
              ';\n  user-select: none;\n',
            ])),
          function (_ref2) {
            return _ref2.$isVisible ? 'translateX(0%)' : 'translateX(-25%)';
          },
          function (_ref3) {
            return _ref3.$isVisible ? 1 : 0;
          },
          function (_ref4) {
            return _ref4.$isVisible ? 'auto' : 'none';
          },
          function (_ref5) {
            return _ref5.theme.speed.normal;
          }
        ),
        Text = (0, styled_components_browser_esm.ZP)(Paragraph.n)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  text-overflow: ellipsis;\n  overflow: hidden;\n',
            ]))
        ),
        Subtitle = (0, styled_components_browser_esm.ZP)(Text)(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              '\n  white-space: nowrap;\n  font-size: ',
              ';\n  font-weight: ',
              ';\n',
            ])),
          function (_ref6) {
            return _ref6.theme.font.default.size.small;
          },
          function (_ref7) {
            return _ref7.theme.font.default.weight.medium;
          }
        ),
        Title = (0, styled_components_browser_esm.ZP)(Text)(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.Z)([
              '\n  font-size: ',
              ';\n  font-weight: ',
              ';\n',
            ])),
          function (_ref8) {
            return _ref8.theme.font.default.size.large;
          },
          function (_ref9) {
            return _ref9.theme.font.default.weight.bold;
          }
        ),
        TabWrapper = styled_components_browser_esm.ZP.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.Z)([
              '\n  display: flex;\n  flex-direction: column;\n',
            ]))
        ),
        TabRow = styled_components_browser_esm.ZP.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.Z)([
              '\n  margin-top: 10px;\n\n  display: flex;\n  align-items: center;\n\n  opacity: ',
              ';\n  transition: ',
              ';\n  transition-delay: ',
              'ms;\n  cursor: pointer;\n',
            ])),
          function (_ref10) {
            return _ref10.$isVisible ? 1 : 0;
          },
          function (_ref11) {
            return _ref11.theme.speed.slow;
          },
          function (_ref12) {
            var $index = _ref12.$index;
            return _ref12.$isVisible ? 30 * $index + 30 : 0;
          }
        ),
        TabBullet = styled_components_browser_esm.ZP.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.Z)([
              '\n  flex-shrink: 0;\n\n  width: 4px;\n  height: 4px;\n  margin-right: 10px;\n\n  background: ',
              ';\n\n  transition: ',
              ';\n',
            ])),
          function (_ref13) {
            var theme = _ref13.theme;
            return _ref13.$isSelected ? theme.color.text : 'transparent';
          },
          function (_ref14) {
            return _ref14.theme.speed.normal;
          }
        ),
        TabText = (0, styled_components_browser_esm.ZP)(Text)(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.Z)([
              '\n  font-size: ',
              ';\n  color: ',
              ';\n  transition: ',
              ';\n\n  &:hover {\n    color: ',
              ';\n  }\n',
            ])),
          function (_ref15) {
            return _ref15.theme.font.default.size.small;
          },
          function (_ref16) {
            var theme = _ref16.theme;
            return _ref16.$isSelected
              ? theme.color.text
              : theme.color.textNeutral;
          },
          function (_ref17) {
            return _ref17.theme.speed.normal;
          },
          function (_ref18) {
            return _ref18.theme.color.text;
          }
        );
      try {
        (ProjectMenu.displayName = 'ProjectMenu'),
          (ProjectMenu.__docgenInfo = {
            description: '',
            displayName: 'ProjectMenu',
            props: {
              tabs: {
                defaultValue: null,
                description: '',
                name: 'tabs',
                required: !0,
                type: { name: 'ProjectMenuTab[]' },
              },
              isVisible: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isVisible',
                required: !1,
                type: { name: 'boolean' },
              },
              subtitle: {
                defaultValue: { value: '' },
                description: '',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              title: {
                defaultValue: { value: '' },
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/ProjectMenu/ProjectMenu.tsx#ProjectMenu'
            ] = {
              docgenInfo: ProjectMenu.__docgenInfo,
              name: 'ProjectMenu',
              path: 'src/UI/components/atoms/ProjectMenu/ProjectMenu.tsx#ProjectMenu',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ProjectMenu_stories = {
          title: 'Atoms/ProjectMenu',
          component: ProjectMenu,
          args: {
            tabs: [
              {
                label: 'OVERVIEW',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'GALLERY',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'PROCESS',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
            isVisible: !0,
            subtitle: 'UI / UX',
            title: 'SPOTLIGHT',
          },
          argTypes: { onClick: { action: 'clicked' } },
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(
            ProjectMenu,
            (0, objectSpread2.Z)({}, args)
          );
        },
        Basic = Template.bind({}),
        LongText = Template.bind({});
      LongText.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, LongText.args),
        {},
        {
          tabs: [
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !0,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label:
                'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
              isSelected: !1,
              onClick: function onClick() {},
            },
          ],
          subtitle:
            'ASFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFOJIOJIOJIOAIJFIOAS',
          title:
            'THIS IS SUPPOSED TO BE A LONG TITLE AOIISGIOSAIGAIGJAIOJGIOGIOSJO',
        }
      );
      var NoText = Template.bind({});
      (NoText.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, NoText.args),
        {},
        { subtitle: void 0, title: void 0 }
      )),
        (Basic.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ProjectMenu {...args} />' } },
          Basic.parameters
        )),
        (LongText.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ProjectMenu {...args} />' } },
          LongText.parameters
        )),
        (NoText.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ProjectMenu {...args} />' } },
          NoText.parameters
        ));
      var __namedExportsOrder = ['Basic', 'LongText', 'NoText'];
    },
    './src/UI/components/atoms/ProjectSectionFactList/ProjectSectionFactList.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _Fact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/atoms/Fact/index.ts'
          ),
          _ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionFactList/ProjectSectionFactList.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/ProjectSectionFactList',
          component: _ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_1__.p,
          args: {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _Fact__WEBPACK_IMPORTED_MODULE_0__.z,
                { label: 'TYPE', value: ' Mobile Application' },
                1
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _Fact__WEBPACK_IMPORTED_MODULE_0__.z,
                { label: 'COMPLETION', value: 'June 2022' },
                2
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _Fact__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  label: 'COLLABORATORS',
                  value: 'Elson Liang, Xavier Woo, Perry Wang',
                },
                3
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                _Fact__WEBPACK_IMPORTED_MODULE_0__.z,
                { label: 'GITHUB', value: 'Link' },
                4
              ),
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_1__.p,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <ProjectSectionFactList {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/atoms/ProjectSectionImage/ProjectSectionImage.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            LongText: function () {
              return LongText;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          _ProjectSectionImage__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionImage/ProjectSectionImage.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/ProjectSectionImage',
          component: _ProjectSectionImage__WEBPACK_IMPORTED_MODULE_1__.N,
          args: {
            src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_0__.Q.image
              .exampleLandscape,
            children: 'This is a caption',
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _ProjectSectionImage__WEBPACK_IMPORTED_MODULE_1__.N,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({}),
          LongText = Template.bind({});
        (LongText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            LongText.args
          ),
          {},
          {
            children:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
          }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSectionImage {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (LongText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSectionImage {...args} />\n)',
              },
            },
            LongText.parameters
          ));
        var __namedExportsOrder = ['Basic', 'LongText'];
      },
    './src/UI/components/atoms/ProjectSectionText/ProjectSectionText.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            LongText: function () {
              return LongText;
            },
            NoTitle: function () {
              return NoTitle;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _ProjectSectionText__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionText/ProjectSectionText.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/ProjectSectionText',
          component: _ProjectSectionText__WEBPACK_IMPORTED_MODULE_0__.H,
          args: {
            title: 'Concept Design',
            children: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _ProjectSectionText__WEBPACK_IMPORTED_MODULE_0__.H,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({}),
          NoTitle = Template.bind({});
        NoTitle.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            NoTitle.args
          ),
          {},
          { title: void 0 }
        );
        var LongText = Template.bind({});
        (LongText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            LongText.args
          ),
          {},
          {
            title:
              'This is a Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long Title FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            children:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
          }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSectionText {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (NoTitle.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSectionText {...args} />\n)',
              },
            },
            NoTitle.parameters
          )),
          (LongText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSectionText {...args} />\n)',
              },
            },
            LongText.parameters
          ));
        var __namedExportsOrder = ['Basic', 'NoTitle', 'LongText'];
      },
    './src/UI/components/atoms/ProjectSectionTitle/ProjectSectionTitle.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            LongTitle: function () {
              return LongTitle;
            },
            NoTitle: function () {
              return NoTitle;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _ProjectSectionTitle__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionTitle/ProjectSectionTitle.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/ProjectSectionTitle',
          component: _ProjectSectionTitle__WEBPACK_IMPORTED_MODULE_0__.M,
          args: { children: 'PROJECT OVERVIEW' },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _ProjectSectionTitle__WEBPACK_IMPORTED_MODULE_0__.M,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({}),
          LongTitle = Template.bind({});
        LongTitle.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            LongTitle.args
          ),
          {},
          {
            children:
              'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
          }
        );
        var NoTitle = Template.bind({});
        (NoTitle.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            NoTitle.args
          ),
          {},
          { children: void 0 }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSectionTitle {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (LongTitle.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSectionTitle {...args} />\n)',
              },
            },
            LongTitle.parameters
          )),
          (NoTitle.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSectionTitle {...args} />\n)',
              },
            },
            NoTitle.parameters
          ));
        var __namedExportsOrder = ['Basic', 'LongTitle', 'NoTitle'];
      },
    './src/UI/components/atoms/RowIconTextButton/RowIconTextButton.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Colored: function () {
              return Colored;
            },
            IconOnly: function () {
              return IconOnly;
            },
            Medium: function () {
              return Medium;
            },
            Small: function () {
              return Small;
            },
            TextOnly: function () {
              return TextOnly;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          styled_icons_boxicons_logos__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@styled-icons/boxicons-logos/Github/Github.esm.js'
            ),
          _RowIconTextButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/atoms/RowIconTextButton/RowIconTextButton.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Atoms/RowIconTextButton',
          component: _RowIconTextButton__WEBPACK_IMPORTED_MODULE_0__.I,
          args: {
            text: 'BUTTON',
            iconSrc: styled_icons_boxicons_logos__WEBPACK_IMPORTED_MODULE_2__.E,
            color: 'black',
            size: 'medium',
          },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _RowIconTextButton__WEBPACK_IMPORTED_MODULE_0__.I,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                {},
                args
              )
            );
          },
          Medium = Template.bind({}),
          TextOnly = Template.bind({});
        TextOnly.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            TextOnly.args
          ),
          {},
          { iconSrc: void 0 }
        );
        var IconOnly = Template.bind({});
        IconOnly.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            IconOnly.args
          ),
          {},
          { text: void 0 }
        );
        var Colored = Template.bind({});
        Colored.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            Colored.args
          ),
          {},
          { color: 'red' }
        );
        var Small = Template.bind({});
        (Small.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            Small.args
          ),
          {},
          { size: 'small' }
        )),
          (Medium.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <RowIconTextButton {...args} />\n)',
              },
            },
            Medium.parameters
          )),
          (TextOnly.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <RowIconTextButton {...args} />\n)',
              },
            },
            TextOnly.parameters
          )),
          (IconOnly.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <RowIconTextButton {...args} />\n)',
              },
            },
            IconOnly.parameters
          )),
          (Colored.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <RowIconTextButton {...args} />\n)',
              },
            },
            Colored.parameters
          )),
          (Small.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <RowIconTextButton {...args} />\n)',
              },
            },
            Small.parameters
          ));
        var __namedExportsOrder = [
          'Medium',
          'TextOnly',
          'IconOnly',
          'Colored',
          'Small',
        ];
      },
    './src/UI/components/groups/About/About.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return About_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          )),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        Paragraph = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        TextTitle = __webpack_require__(
          './src/UI/components/text/TextTitle/index.ts'
        ),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        ImageThumbnail = __webpack_require__(
          './src/UI/components/atoms/ImageThumbnail/index.ts'
        ),
        TwoColumn = __webpack_require__(
          './src/UI/components/layout/TwoColumn/index.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        About = function About(_ref) {
          var props = Object.assign({}, _ref);
          return (0, jsx_runtime.jsx)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsxs)(Content, {
                  leftRatio: 0.7,
                  rightRatio: 0.3,
                  breakIfLessThan: 800,
                  children: [
                    (0, jsx_runtime.jsxs)(TextWrapper, {
                      children: [
                        (0, jsx_runtime.jsx)(TextTitle.w, {
                          size: 'small',
                          children: 'A hybrid between development and design',
                        }),
                        (0, jsx_runtime.jsx)(Paragraph.n, {
                          children:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ultricies ultrices. Fusce porttitor, arcu a viverra euismod, sem massa faucibus felis, nec auctor dui orci id lectus.',
                        }),
                        (0, jsx_runtime.jsx)(Paragraph.n, {
                          children:
                            'Etiam quis quam quis nibh vulputate ultrices non vitae felis. Vestibulum placerat mi non urna euismod faucibus. Cras cursus elementum lacus laoreet consequat. Proin dignissim sagittis libero. Sed malesuada vel nunc eget convallis.',
                        }),
                        (0, jsx_runtime.jsx)(Paragraph.n, {
                          children:
                            'Praesent tortor metus, vestibulum vitae mattis ut, viverra luctus odio. Phasellus efficitur urna et dolor sollicitudin porta.',
                        }),
                        (0, jsx_runtime.jsx)('a', {
                          href: '/images/myw3schoolsimage.jpg',
                          download: !0,
                          children: (0, jsx_runtime.jsx)(Paragraph.n, {
                            children: 'Resume',
                          }),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnailStyled, {
                      src: Theme.Q.image.profile,
                    }),
                  ],
                }),
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n\n  width: 100%;\n  padding: 20px;\n',
            ]))
        ),
        Content = (0, styled_components_browser_esm.ZP)(TwoColumn.z)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  gap: 20px;\n',
            ]))
        ),
        TextWrapper = styled_components_browser_esm.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px;\n\n  > * {\n    margin-bottom: 12px;\n  }\n',
            ]))
        ),
        ImageThumbnailStyled = (0, styled_components_browser_esm.ZP)(
          ImageThumbnail.l
        )(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n  pointer-events: none;\n',
            ]))
        );
      try {
        (About.displayName = 'About'),
          (About.__docgenInfo = {
            description: '',
            displayName: 'About',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/About/About.tsx#About'
            ] = {
              docgenInfo: About.__docgenInfo,
              name: 'About',
              path: 'src/UI/components/groups/About/About.tsx#About',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var About_stories = {
          title: 'Groups/About',
          component: About,
          args: {},
          argTypes: { onClick: { action: 'clicked' } },
        },
        Basic = function Template(args) {
          return (0, jsx_runtime.jsx)(About, (0, objectSpread2.Z)({}, args));
        }.bind({});
      Basic.parameters = (0, objectSpread2.Z)(
        { storySource: { source: '(args) => <About {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/groups/Explore/Explore.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Empty: function () {
            return Empty;
          },
          Exact: function () {
            return Exact;
          },
          Few: function () {
            return Few;
          },
          Many: function () {
            return Many;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Explore_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        ImageThumbnail = __webpack_require__(
          './src/UI/components/atoms/ImageThumbnail/index.ts'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        Paragraph = __webpack_require__(
          './src/UI/components/text/Paragraph/Paragraph.tsx'
        ),
        ResponsiveProps = __webpack_require__(
          './src/UI/utility/hooks/ResponsiveProps.ts'
        ),
        HorizontalBulletMenu = __webpack_require__(
          './src/UI/components/atoms/HorizontalBulletMenu/HorizontalBulletMenu.tsx'
        ),
        GridRow = __webpack_require__(
          './src/UI/components/layout/GridRow/GridRow.tsx'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['title', 'children', 'breakpoints'],
        BREAKPOINTS = [
          { minWidth: 0, columnCount: 1 },
          { minWidth: 500, columnCount: 2 },
          { minWidth: 800, columnCount: 3 },
          { minWidth: 1200, columnCount: 4 },
        ],
        Explore = function Explore(_ref) {
          var _ref$title = _ref.title,
            title = void 0 === _ref$title ? '' : _ref$title,
            _ref$children = _ref.children,
            children = void 0 === _ref$children ? [] : _ref$children,
            _ref$breakpoints = _ref.breakpoints,
            breakpoints =
              void 0 === _ref$breakpoints ? BREAKPOINTS : _ref$breakpoints,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          !Array.isArray(children) && (children = [children]);
          for (
            var _useState = (0, react.useState)(0),
              _useState2 = (0, slicedToArray.Z)(_useState, 2),
              menuIndex = _useState2[0],
              setMenuIndex = _useState2[1],
              contentRef = (0, react.useRef)(null),
              count = 1,
              i = 0;
            i < breakpoints.length;
            i++
          ) {
            var breakpoint = breakpoints[i];
            (0, ResponsiveProps.gY)(breakpoint.minWidth) &&
              (count = breakpoint.columnCount);
          }
          (0, react.useEffect)(function () {
            onScroll();
          });
          var scrollRef = function scrollRef(direction) {
              if (contentRef.current) {
                var element = contentRef.current.children[0],
                  left = 0;
                'START' === direction
                  ? (left = 0)
                  : 'END' === direction && (left = element.scrollWidth),
                  element.scroll({ left: left, behavior: 'smooth' });
              }
            },
            onScroll = function onScroll() {
              if (contentRef.current) {
                var element = contentRef.current.children[0],
                  elementWidth = element.scrollWidth - element.clientWidth,
                  elementScroll = element.scrollLeft;
                setMenuIndex(elementScroll / elementWidth < 0.5 ? 0 : 1);
              }
            };
          return (0, jsx_runtime.jsxs)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(HeaderWrapper, {
                    children: (0, jsx_runtime.jsxs)(Header, {
                      children: [
                        (0, jsx_runtime.jsx)(Bullet, {
                          $isVisible: !1,
                          tabs: [{}, {}],
                        }),
                        (0, jsx_runtime.jsx)(TitleText, {
                          isWrapped: !1,
                          children: title,
                        }),
                        (0, jsx_runtime.jsx)(Bullet, {
                          $isVisible: children.length > count,
                          tabs: [
                            {
                              onClick: function onClick() {
                                return scrollRef('START');
                              },
                              isSelected: 0 === menuIndex,
                            },
                            {
                              onClick: function onClick() {
                                return scrollRef('END');
                              },
                              isSelected: 1 === menuIndex,
                            },
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, jsx_runtime.jsx)('div', {
                    ref: contentRef,
                    children: (0, jsx_runtime.jsx)(Grid, {
                      breakpoints: breakpoints,
                      $center: children.length < count,
                      onScroll: onScroll,
                      children: children,
                    }),
                  }),
                ],
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n  background: ',
              ';\n',
            ])),
          function (_ref2) {
            return _ref2.theme.color.text;
          }
        ),
        HeaderWrapper = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  overflow: hidden;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 20px;\n\n  border: 1px solid ',
              ';\n  border-left: 0px;\n  border-right: 0px;\n',
            ])),
          function (_ref3) {
            return _ref3.theme.color.textHovered;
          }
        ),
        Header = styled_components_browser_esm.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 20px;\n',
            ]))
        ),
        Grid = (0, styled_components_browser_esm.ZP)(GridRow.J)(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px;\n\n  justify-content: ',
              ';\n',
            ])),
          function (_ref4) {
            return _ref4.$center ? 'center' : 'space-between';
          }
        ),
        TitleText = (0, styled_components_browser_esm.ZP)(Paragraph.n)(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.Z)([
              '\n  font-size: ',
              ';\n  font-weight: ',
              ';\n  color: ',
              ';\n',
            ])),
          function (_ref5) {
            return _ref5.theme.font.default.size.h4;
          },
          function (_ref6) {
            return _ref6.theme.font.default.weight.bold;
          },
          function (_ref7) {
            return _ref7.theme.color.backgroundHighlight;
          }
        ),
        Bullet = (0, styled_components_browser_esm.ZP)(HorizontalBulletMenu.F)(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.Z)([
              '\n  opacity: ',
              ';\n  pointer-events: ',
              ';\n',
            ])),
          function (_ref8) {
            return _ref8.$isVisible ? 1 : 0;
          },
          function (_ref9) {
            return _ref9.$isVisible ? 'auto' : 'none';
          }
        );
      try {
        (Explore.displayName = 'Explore'),
          (Explore.__docgenInfo = {
            description: '',
            displayName: 'Explore',
            props: {
              title: {
                defaultValue: { value: '' },
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              breakpoints: {
                defaultValue: {
                  value:
                    '[\n  {\n    minWidth: 0,\n    columnCount: 1,\n  },\n  {\n    minWidth: 500,\n    columnCount: 2,\n  },\n  {\n    minWidth: 800,\n    columnCount: 3,\n  },\n  {\n    minWidth: 1200,\n    columnCount: 4,\n  },\n]',
                },
                description: '',
                name: 'breakpoints',
                required: !1,
                type: { name: 'GridBreakpoint[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/Explore/Explore.tsx#Explore'
            ] = {
              docgenInfo: Explore.__docgenInfo,
              name: 'Explore',
              path: 'src/UI/components/groups/Explore/Explore.tsx#Explore',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Explore_stories = {
          title: 'Groups/Explore',
          component: Explore,
          args: {
            title: 'EXPLORE',
            children: [
              (0, jsx_runtime.jsx)(
                ImageThumbnail.l,
                {
                  src: Theme.Q.image.exampleSquare,
                  title: '1',
                  isTitleVisible: !0,
                },
                '1'
              ),
              (0, jsx_runtime.jsx)(
                ImageThumbnail.l,
                {
                  src: Theme.Q.image.exampleSquare,
                  title: '2',
                  isTitleVisible: !0,
                },
                '2'
              ),
              (0, jsx_runtime.jsx)(
                ImageThumbnail.l,
                {
                  src: Theme.Q.image.exampleSquare,
                  title: '3',
                  isTitleVisible: !0,
                },
                '3'
              ),
              (0, jsx_runtime.jsx)(
                ImageThumbnail.l,
                {
                  src: Theme.Q.image.exampleSquare,
                  title: '4',
                  isTitleVisible: !0,
                },
                '4'
              ),
              (0, jsx_runtime.jsx)(
                ImageThumbnail.l,
                {
                  src: Theme.Q.image.exampleSquare,
                  title: '5',
                  isTitleVisible: !0,
                },
                '5'
              ),
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(Explore, (0, objectSpread2.Z)({}, args));
        },
        Many = Template.bind({}),
        Exact = Template.bind({});
      Exact.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Exact.args),
        {},
        {
          children: [
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleSquare,
                title: '1',
                isTitleVisible: !0,
              },
              '1'
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleSquare,
                title: '2',
                isTitleVisible: !0,
              },
              '2'
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleSquare,
                title: '3',
                isTitleVisible: !0,
              },
              '3'
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleSquare,
                title: '4',
                isTitleVisible: !0,
              },
              '4'
            ),
          ],
        }
      );
      var Few = Template.bind({});
      Few.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Few.args),
        {},
        {
          children: [
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              { src: Theme.Q.image.exampleSquare },
              0
            ),
          ],
        }
      );
      var Empty = Template.bind({});
      (Empty.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Empty.args),
        {},
        { children: [] }
      )),
        (Many.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Explore {...args} />' } },
          Many.parameters
        )),
        (Exact.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Explore {...args} />' } },
          Exact.parameters
        )),
        (Few.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Explore {...args} />' } },
          Few.parameters
        )),
        (Empty.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Explore {...args} />' } },
          Empty.parameters
        ));
      var __namedExportsOrder = ['Many', 'Exact', 'Few', 'Empty'];
    },
    './src/UI/components/groups/Footer/FooterCopyright/FooterCopyright.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _FooterCopyright__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/groups/Footer/FooterCopyright/FooterCopyright.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/Footer/FooterCopyright',
          component: _FooterCopyright__WEBPACK_IMPORTED_MODULE_0__.g,
          args: {},
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _FooterCopyright__WEBPACK_IMPORTED_MODULE_0__.g,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <FooterCopyright {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/Footer/FooterIconRow/FooterIconRow.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _FooterIconRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/groups/Footer/FooterIconRow/FooterIconRow.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/Footer/FooterIconRow',
          component: _FooterIconRow__WEBPACK_IMPORTED_MODULE_0__.f,
          args: {},
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _FooterIconRow__WEBPACK_IMPORTED_MODULE_0__.f,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <FooterIconRow {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/Footer/FooterLink/FooterLink.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _FooterLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/groups/Footer/FooterLink/FooterLink.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/Footer/FooterLink',
          component: _FooterLink__WEBPACK_IMPORTED_MODULE_0__.S,
          args: {},
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _FooterLink__WEBPACK_IMPORTED_MODULE_0__.S,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <FooterLink {...args} />' } },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/Footer/Footer/Footer.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Desktop: function () {
            return Desktop;
          },
          Mobile: function () {
            return Mobile;
          },
          Tablet: function () {
            return Tablet;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Footer_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        FooterCopyright = __webpack_require__(
          './src/UI/components/groups/Footer/FooterCopyright/FooterCopyright.tsx'
        ),
        FooterIconRow = __webpack_require__(
          './src/UI/components/groups/Footer/FooterIconRow/index.ts'
        ),
        FooterLink = __webpack_require__(
          './src/UI/components/groups/Footer/FooterLink/FooterLink.tsx'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Footer = function Footer(_ref) {
          var props = Object.assign({}, _ref);
          return (0, jsx_runtime.jsxs)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(FooterIconRowStyled, {}),
                  (0, jsx_runtime.jsx)(FooterCopyright.g, {}),
                  (0, jsx_runtime.jsx)(FooterLink.S, {}),
                ],
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n\n  width: 100%;\n  height: ',
              'px;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n',
            ])),
          function (_ref2) {
            return _ref2.theme.size.footerHeight;
          }
        ),
        FooterIconRowStyled = (0, styled_components_browser_esm.ZP)(
          FooterIconRow.f
        )(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  margin-bottom: 10px;\n',
            ]))
        );
      try {
        (Footer.displayName = 'Footer'),
          (Footer.__docgenInfo = {
            description: '',
            displayName: 'Footer',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/Footer/Footer/Footer.tsx#Footer'
            ] = {
              docgenInfo: Footer.__docgenInfo,
              name: 'Footer',
              path: 'src/UI/components/groups/Footer/Footer/Footer.tsx#Footer',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var preview = __webpack_require__(
          './node_modules/@storybook/addon-viewport/dist/esm/preview.js'
        ),
        Footer_stories = {
          title: 'Groups/Footer/Footer',
          component: Footer,
          args: {},
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(Footer, (0, objectSpread2.Z)({}, args));
        },
        Desktop = Template.bind({}),
        Tablet = Template.bind({});
      Tablet.parameters = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Tablet.parameters),
        {},
        {
          viewport: (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, preview.kp),
            {},
            { defaultViewport: 'tablet' }
          ),
        }
      );
      var Mobile = Template.bind({});
      (Mobile.parameters = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Mobile.parameters),
        {},
        {
          viewport: (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, preview.kp),
            {},
            { defaultViewport: 'mobile2' }
          ),
        }
      )),
        (Desktop.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Footer {...args} />' } },
          Desktop.parameters
        )),
        (Tablet.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Footer {...args} />' } },
          Tablet.parameters
        )),
        (Mobile.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Footer {...args} />' } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ['Desktop', 'Tablet', 'Mobile'];
    },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/GalleryHeaderBase.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/GalleryHeaderBase.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/GalleryHeader/GalleryHeaderBase',
          component: _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_0__.Z,
          args: {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                'div',
                { children: 'Left' },
                1
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                'div',
                { children: 'Right' },
                2
              ),
            ],
            pageTabs: [
              {
                label: 'VISUAL ARTS',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'UI UX',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'ARCHITECTURE',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
            sortTabs: [
              {
                label: 'NEWEST',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'OLDEST',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'A - Z',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'Z - A',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_0__.Z,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <GalleryHeaderBase {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderBrowser/GalleryHeaderBrowser.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _GalleryHeaderBrowser__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/groups/GalleryHeader/GalleryHeaderBrowser/GalleryHeaderBrowser.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/GalleryHeader/GalleryHeaderBrowser',
          component: _GalleryHeaderBrowser__WEBPACK_IMPORTED_MODULE_0__.y,
          args: {
            pageTabs: [
              {
                label: 'VISUAL ARTS',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'UI / UX',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'ARCHITECTURE',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
            sortTabs: [
              {
                label: 'NEWEST',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'OLDEST',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'A - Z',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'Z - A',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _GalleryHeaderBrowser__WEBPACK_IMPORTED_MODULE_0__.y,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <GalleryHeaderBrowser {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderMain/GalleryHeaderMain.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
            default: function () {
              return GalleryHeaderMain_stories;
            },
          });
        var objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          ResponsiveProps =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__('./src/UI/utility/hooks/ResponsiveProps.ts')),
          GalleryHeaderBrowser = __webpack_require__(
            './src/UI/components/groups/GalleryHeader/GalleryHeaderBrowser/GalleryHeaderBrowser.tsx'
          ),
          GalleryHeaderMobile = __webpack_require__(
            './src/UI/components/groups/GalleryHeader/GalleryHeaderMobile/GalleryHeaderMobile.tsx'
          ),
          GalleryHeaderTablet = __webpack_require__(
            './src/UI/components/groups/GalleryHeader/GalleryHeaderTablet/GalleryHeaderTablet.tsx'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          GalleryHeaderMain = function GalleryHeaderMain(_ref) {
            var props = Object.assign({}, _ref),
              isTablet = (0, ResponsiveProps.gY)(420),
              isBrowser = (0, ResponsiveProps.gY)(720);
            return (function render() {
              return isBrowser
                ? (0, jsx_runtime.jsx)(
                    GalleryHeaderBrowser.y,
                    (0, objectSpread2.Z)({}, props)
                  )
                : isTablet
                ? (0, jsx_runtime.jsx)(
                    GalleryHeaderTablet.i,
                    (0, objectSpread2.Z)({}, props)
                  )
                : (0, jsx_runtime.jsx)(
                    GalleryHeaderMobile.F,
                    (0, objectSpread2.Z)({}, props)
                  );
            })();
          };
        try {
          (GalleryHeaderMain.displayName = 'GalleryHeaderMain'),
            (GalleryHeaderMain.__docgenInfo = {
              description: '',
              displayName: 'GalleryHeaderMain',
              props: {
                pageTabs: {
                  defaultValue: null,
                  description: '',
                  name: 'pageTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
                sortTabs: {
                  defaultValue: null,
                  description: '',
                  name: 'sortTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/GalleryHeader/GalleryHeaderMain/GalleryHeaderMain.tsx#GalleryHeaderMain'
              ] = {
                docgenInfo: GalleryHeaderMain.__docgenInfo,
                name: 'GalleryHeaderMain',
                path: 'src/UI/components/groups/GalleryHeader/GalleryHeaderMain/GalleryHeaderMain.tsx#GalleryHeaderMain',
              });
        } catch (__react_docgen_typescript_loader_error) {}
        var GalleryHeaderMain_stories = {
            title: 'Groups/GalleryHeader/GalleryHeader',
            component: GalleryHeaderMain,
            args: {
              pageTabs: [
                {
                  label: 'VISUAL ARTS',
                  isSelected: !0,
                  onClick: function onClick() {},
                },
                {
                  label: 'UI UX',
                  isSelected: !1,
                  onClick: function onClick() {},
                },
                {
                  label: 'ARCHITECTURE',
                  isSelected: !1,
                  onClick: function onClick() {},
                },
              ],
              sortTabs: [
                {
                  label: 'NEWEST',
                  isSelected: !0,
                  onClick: function onClick() {},
                },
                {
                  label: 'OLDEST',
                  isSelected: !1,
                  onClick: function onClick() {},
                },
                {
                  label: 'A - Z',
                  isSelected: !1,
                  onClick: function onClick() {},
                },
                {
                  label: 'Z - A',
                  isSelected: !1,
                  onClick: function onClick() {},
                },
              ],
            },
            argTypes: { onClick: { action: 'clicked' } },
          },
          Basic = function Template(args) {
            return (0, jsx_runtime.jsx)(
              GalleryHeaderMain,
              (0, objectSpread2.Z)({}, args)
            );
          }.bind({});
        Basic.parameters = (0, objectSpread2.Z)(
          {
            storySource: {
              source: '(args) => (\n  <GalleryHeaderMain {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderMobile/GalleryHeaderMobile.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _GalleryHeaderMobile__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/groups/GalleryHeader/GalleryHeaderMobile/GalleryHeaderMobile.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/GalleryHeader/GalleryHeaderMobile',
          component: _GalleryHeaderMobile__WEBPACK_IMPORTED_MODULE_0__.F,
          args: {
            pageTabs: [
              {
                label: 'VISUAL ARTS',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'UI / UX',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'ARCHITECTURE',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
            sortTabs: [
              {
                label: 'NEWEST',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'OLDEST',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'A - Z',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'Z - A',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _GalleryHeaderMobile__WEBPACK_IMPORTED_MODULE_0__.F,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <GalleryHeaderMobile {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderTablet/GalleryHeaderTablet.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _GalleryHeaderTablet__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/groups/GalleryHeader/GalleryHeaderTablet/GalleryHeaderTablet.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/GalleryHeader/GalleryHeaderTablet',
          component: _GalleryHeaderTablet__WEBPACK_IMPORTED_MODULE_0__.i,
          args: {
            pageTabs: [
              {
                label: 'VISUAL ARTS',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'UI / UX',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'ARCHITECTURE',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
            sortTabs: [
              {
                label: 'NEWEST',
                isSelected: !0,
                onClick: function onClick() {},
              },
              {
                label: 'OLDEST',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'A - Z',
                isSelected: !1,
                onClick: function onClick() {},
              },
              {
                label: 'Z - A',
                isSelected: !1,
                onClick: function onClick() {},
              },
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _GalleryHeaderTablet__WEBPACK_IMPORTED_MODULE_0__.i,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <GalleryHeaderTablet {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/GalleryProject/GalleryProject.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            Short: function () {
              return Short;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
            default: function () {
              return GalleryProject_stories;
            },
          });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          styled_components_browser_esm = __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          ResponsiveProps =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__('./src/UI/utility/hooks/ResponsiveProps.ts')),
          Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          GalleryProjectPanel = __webpack_require__(
            './src/UI/components/atoms/GalleryProjectPanel/GalleryProjectPanel.tsx'
          ),
          StickyEndsContainer = __webpack_require__(
            './src/UI/components/layout/StickyEndsContainer/StickyEndsContainer.tsx'
          ),
          TwoColumn = __webpack_require__(
            './src/UI/components/layout/TwoColumn/index.ts'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['title', 'subtitle', 'body', 'facts', 'children'],
          GalleryProject = function GalleryProject(_ref) {
            var title = _ref.title,
              subtitle = _ref.subtitle,
              body = _ref.body,
              facts = _ref.facts,
              children = _ref.children,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded),
              titleSize = 'large';
            return (
              (0, ResponsiveProps.mE)(1350) && (titleSize = 'medium'),
              (0, ResponsiveProps.mE)(1100) && (titleSize = 'large'),
              (0, ResponsiveProps.mE)(600) && (titleSize = 'medium'),
              (0, ResponsiveProps.mE)(400) && (titleSize = 'small'),
              (0, jsx_runtime.jsx)(
                Wrapper,
                (0, objectSpread2.Z)(
                  (0, objectSpread2.Z)({}, props),
                  {},
                  {
                    children: (0, jsx_runtime.jsxs)(Content, {
                      leftRatio: 1,
                      rightRatio: 2,
                      breakIfLessThan: 1100,
                      children: [
                        (0, jsx_runtime.jsx)(StickyEndsContainer.Y, {
                          topMargin: Theme.Q.size.headerHeight + 20,
                          bottomMargin: 20,
                          children: (0, jsx_runtime.jsx)(
                            GalleryProjectPanel.c,
                            {
                              titleSize: titleSize,
                              title: title,
                              subtitle: subtitle,
                              body: body,
                              facts: facts,
                            }
                          ),
                        }),
                        (0, jsx_runtime.jsx)(RightWrapper, {
                          children: children,
                        }),
                      ],
                    }),
                  }
                )
              )
            );
          },
          Wrapper = styled_components_browser_esm.ZP.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  box-sizing: border-box;\n\n  width: 100%;\n  padding: 20px;\n',
              ]))
          ),
          Content = (0, styled_components_browser_esm.ZP)(TwoColumn.z)(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.Z)([
                '\n  gap: 20px;\n',
              ]))
          ),
          RightWrapper = styled_components_browser_esm.ZP.div(
            _templateObject3 ||
              (_templateObject3 = (0, taggedTemplateLiteral.Z)([
                '\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n',
              ]))
          );
        try {
          (GalleryProject.displayName = 'GalleryProject'),
            (GalleryProject.__docgenInfo = {
              description: '',
              displayName: 'GalleryProject',
              props: {
                title: {
                  defaultValue: null,
                  description: '',
                  name: 'title',
                  required: !0,
                  type: { name: 'string' },
                },
                subtitle: {
                  defaultValue: null,
                  description: '',
                  name: 'subtitle',
                  required: !0,
                  type: { name: 'string' },
                },
                body: {
                  defaultValue: null,
                  description: '',
                  name: 'body',
                  required: !0,
                  type: { name: 'string[]' },
                },
                facts: {
                  defaultValue: null,
                  description: '',
                  name: 'facts',
                  required: !0,
                  type: { name: 'Fact[]' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/GalleryProject/GalleryProject.tsx#GalleryProject'
              ] = {
                docgenInfo: GalleryProject.__docgenInfo,
                name: 'GalleryProject',
                path: 'src/UI/components/groups/GalleryProject/GalleryProject.tsx#GalleryProject',
              });
        } catch (__react_docgen_typescript_loader_error) {}
        var GalleryProject_stories_templateObject,
          GalleryProject_stories_templateObject2,
          ImageThumbnail = __webpack_require__(
            './src/UI/components/atoms/ImageThumbnail/index.ts'
          ),
          Grid = __webpack_require__(
            './src/UI/components/layout/Grid/index.ts'
          ),
          LinkExternalFactText = __webpack_require__(
            './src/UI/components/inputs/LinkExternalFactText/index.ts'
          ),
          BREAKPOINTS = [
            { minWidth: 0, columnCount: 1 },
            { minWidth: 600, columnCount: 2 },
            { minWidth: 1100, columnCount: 3 },
          ],
          Header = styled_components_browser_esm.ZP.div(
            GalleryProject_stories_templateObject ||
              (GalleryProject_stories_templateObject = (0,
              taggedTemplateLiteral.Z)([
                '\n  z-index: ',
                ';\n  position: sticky;\n  top: 0px;\n  width: 100%;\n  height: ',
                'px;\n  background-color: red;\n',
              ])),
            function (_ref) {
              return _ref.theme.layer.header;
            },
            function (_ref2) {
              return _ref2.theme.size.headerHeight;
            }
          ),
          GridStyled = (0, styled_components_browser_esm.ZP)(Grid.r)(
            GalleryProject_stories_templateObject2 ||
              (GalleryProject_stories_templateObject2 = (0,
              taggedTemplateLiteral.Z)(['\n  padding: 0px;\n']))
          ),
          GalleryProject_stories = {
            title: 'Groups/GalleryProject',
            component: GalleryProject,
            args: {
              title: 'Kinetic Boardwalk',
              subtitle: 'Media Streaming Platform',
              body: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare ligula a massa congue tempus. Vestibulum molestie efficitur risus, in commodo leo fringilla ut. Maecenas blandit nunc in purus rhoncus maximus efficitur eu ligula. Nam ullamcorper rhoncus luctus. Donec consectetur eget enim vel imperdiet. Suspendisse ut enim sit amet urna scelerisque gravida.',
                'In in urna sed elit sollicitudin ultrices. Aenean quis eros et augue congue tempor. Maecenas vel ornare magna, sit amet luctus lorem. Curabitur nisi felis, maximus at erat quis, rutrum interdum lectus. Aliquam vel enim sit amet lectus ullamcorper dignissim',
              ],
              facts: [
                { label: 'TYPE', value: 'Mobile Application' },
                { label: 'COMPLETION', value: 'June 2022' },
                {
                  label: 'COLLABORATORS',
                  value: 'Elson Liang, Xavier Woo, Perry Wang',
                },
                {
                  label: 'GITHUB',
                  value: (0, jsx_runtime.jsx)(LinkExternalFactText.o, {
                    children: 'Link',
                    link: '/',
                  }),
                },
              ],
              children: [
                (0, jsx_runtime.jsxs)(
                  GridStyled,
                  {
                    breakpoints: BREAKPOINTS,
                    children: [
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                    ],
                  },
                  2
                ),
              ],
            },
            argTypes: { onClick: { action: 'clicked' } },
          },
          Template = function Template(args) {
            return (0, jsx_runtime.jsxs)('div', {
              children: [
                (0, jsx_runtime.jsx)(Header, {}),
                (0, jsx_runtime.jsx)(
                  GalleryProject,
                  (0, objectSpread2.Z)({}, args)
                ),
              ],
            });
          },
          Basic = Template.bind({}),
          Short = Template.bind({});
        (Short.args = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Short.args),
          {},
          {
            title: 'Kinetic Boardwalk',
            subtitle: 'Media Streaming Platform',
            body: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
            facts: [
              { label: 'TYPE', value: 'Mobile Application' },
              { label: 'COMPLETION', value: 'June 2022' },
            ],
            children: [
              (0, jsx_runtime.jsxs)(
                GridStyled,
                {
                  breakpoints: BREAKPOINTS,
                  children: [
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                    (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                      src: Theme.Q.image.exampleSquare,
                    }),
                  ],
                },
                2
              ),
            ],
          }
        )),
          (Basic.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source:
                  '(args) => (\n  <div>\n    <Header />\n    <GalleryProject {...args} />\n  </div>\n)',
              },
            },
            Basic.parameters
          )),
          (Short.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source:
                  '(args) => (\n  <div>\n    <Header />\n    <GalleryProject {...args} />\n  </div>\n)',
              },
            },
            Short.parameters
          ));
        var __namedExportsOrder = ['Basic', 'Short'];
      },
    './src/UI/components/groups/Header/HeaderLogo/HeaderLogo.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _HeaderLogo__WEBPACK_IMPORTED_MODULE_1__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './src/UI/components/groups/Header/HeaderLogo/HeaderLogo.tsx'
            )),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/Header/HeaderLogo',
          component: _HeaderLogo__WEBPACK_IMPORTED_MODULE_1__.O,
          args: { href: '/projects' },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _HeaderLogo__WEBPACK_IMPORTED_MODULE_1__.O,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <HeaderLogo {...args} />' } },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/Header/HeaderTabsMobile/HeaderTabsMobile.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _HeaderTabsMobile__WEBPACK_IMPORTED_MODULE_1__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './src/UI/components/groups/Header/HeaderTabsMobile/HeaderTabsMobile.tsx'
            )),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/Header/HeaderTabsMobile',
          component: _HeaderTabsMobile__WEBPACK_IMPORTED_MODULE_1__.h,
          args: {
            tabs: [
              { label: 'PROJECTS', href: '/projects' },
              { label: 'GALLERY', href: '/gallery' },
              { label: 'ABOUT', href: '/about' },
              { label: 'BLOG', href: '/blog' },
              { label: 'LONGGGGGGGGGGGGGGGGGGGG TEXT', href: '/blog' },
            ],
            isVisible: !0,
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _HeaderTabsMobile__WEBPACK_IMPORTED_MODULE_1__.h,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <HeaderTabsMobile {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/Header/HeaderTabs/HeaderTabs.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _HeaderTabs__WEBPACK_IMPORTED_MODULE_1__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './src/UI/components/groups/Header/HeaderTabs/HeaderTabs.tsx'
            )),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/Header/HeaderTabs',
          component: _HeaderTabs__WEBPACK_IMPORTED_MODULE_1__.a,
          args: {
            tabs: [
              { label: 'PROJECTS', href: '/projects' },
              { label: 'GALLERY', href: '/gallery' },
              { label: 'ABOUT', href: '/about' },
              { label: 'BLOG', href: '/blog' },
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _HeaderTabs__WEBPACK_IMPORTED_MODULE_1__.a,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          { storySource: { source: '(args) => <HeaderTabs {...args} />' } },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/Header/Header/Header.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          Mobile: function () {
            return Mobile;
          },
          NoTabs: function () {
            return NoTabs;
          },
          Tablet: function () {
            return Tablet;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Header_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children'],
        Header = function Header(_ref) {
          var children = _ref.children,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsxs)(Content, {
                  children: [children[0], children[1]],
                }),
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  overflow: hidden;\n  box-sizing: border-box;\n\n  width: 100%;\n  height: ',
              'px;\n  padding: 0px 20px;\n\n  display: flex;\n  align-items: center;\n\n  user-select: none;\n  pointer-events: none;\n  background-color: ',
              ';\n  border-bottom: 1px solid ',
              ';\n\n  //mix-blend-mode: difference;\n  //filter: invert();\n',
            ])),
          function (_ref2) {
            return _ref2.theme.size.headerHeight;
          },
          function (_ref3) {
            return _ref3.theme.color.background;
          },
          function (_ref4) {
            return _ref4.theme.color.outline;
          }
        ),
        Content = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  gap: 20px;\n\n  > * {\n    flex-shrink: 0;\n    pointer-events: auto;\n\n    &:nth-child(1) {\n      z-index: 1;\n    }\n\n    &:nth-child(2) {\n      z-index: 0;\n    }\n  }\n',
            ]))
        );
      try {
        (Header.displayName = 'Header'),
          (Header.__docgenInfo = {
            description: '',
            displayName: 'Header',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/Header/Header/Header.tsx#Header'
            ] = {
              docgenInfo: Header.__docgenInfo,
              name: 'Header',
              path: 'src/UI/components/groups/Header/Header/Header.tsx#Header',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var preview = __webpack_require__(
          './node_modules/@storybook/addon-viewport/dist/esm/preview.js'
        ),
        HeaderLogo = __webpack_require__(
          './src/UI/components/groups/Header/HeaderLogo/HeaderLogo.tsx'
        ),
        HeaderTabs = __webpack_require__(
          './src/UI/components/groups/Header/HeaderTabs/HeaderTabs.tsx'
        ),
        Header_stories = {
          title: 'Groups/Header/Header',
          component: Header,
          args: {
            children: [
              (0, jsx_runtime.jsx)(HeaderLogo.O, { href: '/' }),
              (0, jsx_runtime.jsx)(HeaderTabs.a, {
                tabs: [
                  { label: 'PROJECTS', href: '/projects' },
                  { label: 'GALLERY', href: '/gallery' },
                  { label: 'ABOUT', href: '/about' },
                  { label: 'BLOG', href: '/blog' },
                ],
              }),
            ],
          },
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(Header, (0, objectSpread2.Z)({}, args));
        },
        Basic = Template.bind({}),
        NoTabs = Template.bind({});
      NoTabs.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, NoTabs.args),
        {},
        {
          children: [
            (0, jsx_runtime.jsx)(HeaderLogo.O, { href: '/' }),
            (0, jsx_runtime.jsx)(HeaderTabs.a, { tabs: [] }),
          ],
        }
      );
      var Tablet = Template.bind({});
      Tablet.parameters = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Tablet.parameters),
        {},
        {
          viewport: (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, preview.kp),
            {},
            { defaultViewport: 'tablet' }
          ),
        }
      );
      var Mobile = Template.bind({});
      (Mobile.parameters = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Mobile.parameters),
        {},
        {
          viewport: (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, preview.kp),
            {},
            { defaultViewport: 'mobile2' }
          ),
        }
      )),
        (Basic.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Header {...args} />' } },
          Basic.parameters
        )),
        (NoTabs.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Header {...args} />' } },
          NoTabs.parameters
        )),
        (Tablet.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Header {...args} />' } },
          Tablet.parameters
        )),
        (Mobile.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Header {...args} />' } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ['Basic', 'NoTabs', 'Tablet', 'Mobile'];
    },
    './src/UI/components/groups/ModalImage/ModalImage.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          LongCaption: function () {
            return LongCaption;
          },
          NoCaption: function () {
            return NoCaption;
          },
          NoImage: function () {
            return NoImage;
          },
          OneImage: function () {
            return OneImage;
          },
          ThreeImage: function () {
            return ThreeImage;
          },
          TwoImage: function () {
            return TwoImage;
          },
          WithOffset: function () {
            return WithOffset;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return ModalImage_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        Image = __webpack_require__('./src/UI/components/atoms/Image/index.ts'),
        Paragraph = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        ResponsiveCSS = __webpack_require__(
          './src/UI/utility/styles/ResponsiveCSS.ts'
        ),
        TextCaption = __webpack_require__(
          './src/UI/components/text/TextCaption/index.ts'
        ),
        scripts_Array = __webpack_require__(
          './src/UI/utility/scripts/Array.ts'
        ),
        ButtonModalClose = __webpack_require__(
          './src/UI/components/inputs/ButtonModalClose/ButtonModalClose.tsx'
        ),
        ButtonModalNext = __webpack_require__(
          './src/UI/components/inputs/ButtonModalNext/ButtonModalNext.tsx'
        ),
        Modal = __webpack_require__(
          './src/UI/components/layout/Modal/index.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['srcArray', 'indexOffset', 'onCloseClick'],
        createPane = function createPane(srcArray, index) {
          return [
            (0, jsx_runtime.jsx)(
              ImageStyled,
              {
                $index: index - 1,
                src: (0, scripts_Array.hi)(srcArray, index - 1).src,
              },
              (0, scripts_Array.hi)(srcArray, index - 1).src
            ),
            (0, jsx_runtime.jsx)(
              ImageStyled,
              {
                $index: index,
                src: (0, scripts_Array.hi)(srcArray, index).src,
              },
              (0, scripts_Array.hi)(srcArray, index).src
            ),
            (0, jsx_runtime.jsx)(
              ImageStyled,
              {
                $index: index + 1,
                src: (0, scripts_Array.hi)(srcArray, index + 1).src,
              },
              (0, scripts_Array.hi)(srcArray, index + 1).src
            ),
          ];
        },
        ModalImage = function ModalImage(_ref) {
          var srcArray = _ref.srcArray,
            _ref$indexOffset = _ref.indexOffset,
            indexOffset = void 0 === _ref$indexOffset ? 0 : _ref$indexOffset,
            onCloseClick = _ref.onCloseClick,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          if (0 === srcArray.length)
            throw new Error('Need at least one image!');
          var displayNextButtons = !(srcArray.length <= 1),
            _useState = (0, react.useState)(indexOffset),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            index = _useState2[0],
            setIndex = _useState2[1],
            _useState3 = (0, react.useState)(createPane(srcArray, index)),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            currentPane = _useState4[0],
            setCurrentPane = _useState4[1],
            _useState5 = (0, react.useState)(!1),
            _useState6 = (0, slicedToArray.Z)(_useState5, 2),
            isAnimated = _useState6[0],
            setIsAnimated = _useState6[1];
          (0, react.useEffect)(
            function () {
              changeImage(indexOffset), setIsAnimated(!1);
            },
            [indexOffset]
          );
          var changeImage = function changeImage(newIndex) {
            setIsAnimated(!0),
              setCurrentPane(createPane(srcArray, newIndex)),
              setIndex(newIndex);
          };
          return (0, jsx_runtime.jsxs)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: [
                  (0, jsx_runtime.jsxs)(RowTop, {
                    children: [
                      (0, jsx_runtime.jsx)(ButtonClosePlaceholder, {}),
                      (0, jsx_runtime.jsx)(Title, {
                        isWrapped: !1,
                        children: (0, scripts_Array.hi)(srcArray, index).title,
                      }),
                      (0, jsx_runtime.jsx)(ButtonModalClose.C, {
                        onClick: onCloseClick,
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(WrapperMiddle, {
                    children: (0, jsx_runtime.jsx)(ImageContainer, {
                      onTransitionEnd: function onTransitionEnd() {
                        return setIsAnimated(!1);
                      },
                      $isAnimated: isAnimated,
                      $offset: index,
                      children: currentPane,
                    }),
                  }),
                  (0, jsx_runtime.jsxs)(RowBottom, {
                    children: [
                      displayNextButtons &&
                        (0, jsx_runtime.jsx)(ButtonNext, {
                          direction: 'LEFT',
                          onClick: function onClick() {
                            return changeImage(index - 1);
                          },
                        }),
                      (0, jsx_runtime.jsx)(Caption, {
                        isWrapped: !1,
                        children: (0, scripts_Array.hi)(srcArray, index)
                          .caption,
                      }),
                      displayNextButtons &&
                        (0, jsx_runtime.jsx)(ButtonNext, {
                          direction: 'RIGHT',
                          onClick: function onClick() {
                            return changeImage(index + 1);
                          },
                        }),
                    ],
                  }),
                ],
              }
            )
          );
        },
        Wrapper = (0, styled_components_browser_esm.ZP)(Modal.u)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  background-color: ',
              ';\n\n  display: flex;\n  flex-direction: column;\n',
            ])),
          function (_ref2) {
            return _ref2.theme.color.background;
          }
        ),
        Row = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n\n  height: 48px;\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  box-shadow: 0 0 0 1px ',
              ' inset;\n',
            ])),
          function (_ref3) {
            var theme = _ref3.theme;
            return ''.concat(theme.color.outline);
          }
        ),
        RowTop = (0, styled_components_browser_esm.ZP)(Row)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  padding: 0px 8px;\n  gap: 20px;\n',
            ]))
        ),
        Title = (0, styled_components_browser_esm.ZP)(Paragraph.n)(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              '\n  flex-grow: 1;\n\n  font-size: ',
              ';\n  font-weight: ',
              ';\n  text-align: center;\n',
            ])),
          function (_ref4) {
            return _ref4.theme.font.default.size.h6;
          },
          function (_ref5) {
            return _ref5.theme.font.default.weight.bold;
          }
        ),
        ButtonClosePlaceholder = (0, styled_components_browser_esm.ZP)(
          ButtonModalClose.C
        )(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.Z)([
              '\n  opacity: 0;\n  pointer-events: none;\n',
            ]))
        ),
        RowBottom = (0, styled_components_browser_esm.ZP)(Row)(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.Z)([
              '\n  gap: 20px;\n\n  ',
              '\n',
            ])),
          (0, ResponsiveCSS.o)(
            'mobileLarge',
            '\n    gap: 0px;\n\n    > * {\n      &:first-child {\n        border-right: 0px;\n      }\n    }\n  '
          )
        ),
        ButtonNext = (0, styled_components_browser_esm.ZP)(ButtonModalNext.W)(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.Z)([
              '\n  height: 100%;\n\n  ',
              '\n',
            ])),
          (0, ResponsiveCSS.o)('mobileLarge', '\n    width: 50%;\n  ')
        ),
        Caption = (0, styled_components_browser_esm.ZP)(TextCaption.$)(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.Z)([
              '\n  flex-grow: 1;\n\n  ',
              '\n',
            ])),
          (0, ResponsiveCSS.o)('mobileLarge', '\n      display: none;\n  ')
        ),
        WrapperMiddle = styled_components_browser_esm.ZP.div(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.Z)([
              '\n  flex-grow: 1;\n  padding: 10px;\n',
            ]))
        ),
        ImageContainer = styled_components_browser_esm.ZP.div(
          _templateObject10 ||
            (_templateObject10 = (0, taggedTemplateLiteral.Z)([
              '\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  left: ',
              ';\n\n  transition: ',
              ';\n',
            ])),
          function (_ref6) {
            var $offset = _ref6.$offset;
            return ''.concat(200 * -$offset, 'vw');
          },
          function (_ref7) {
            var theme = _ref7.theme;
            return _ref7.$isAnimated
              ? ''.concat(theme.speed.normal, ' ease')
              : 'none';
          }
        ),
        ImageStyled = (0, styled_components_browser_esm.ZP)(Image.E)(
          _templateObject11 ||
            (_templateObject11 = (0, taggedTemplateLiteral.Z)([
              '\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  left: ',
              ';\n\n  object-fit: contain;\n',
            ])),
          function (_ref8) {
            var $index = _ref8.$index;
            return ''.concat(200 * $index, 'vw');
          }
        );
      try {
        (ModalImage.displayName = 'ModalImage'),
          (ModalImage.__docgenInfo = {
            description: '',
            displayName: 'ModalImage',
            props: {
              srcArray: {
                defaultValue: null,
                description: '',
                name: 'srcArray',
                required: !0,
                type: { name: 'ImageProps[]' },
              },
              indexOffset: {
                defaultValue: { value: '0' },
                description: '',
                name: 'indexOffset',
                required: !1,
                type: { name: 'number' },
              },
              onCloseClick: {
                defaultValue: null,
                description: '',
                name: 'onCloseClick',
                required: !1,
                type: { name: '(() => void)' },
              },
              isVisible: {
                defaultValue: null,
                description: '',
                name: 'isVisible',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/ModalImage/ModalImage.tsx#ModalImage'
            ] = {
              docgenInfo: ModalImage.__docgenInfo,
              name: 'ModalImage',
              path: 'src/UI/components/groups/ModalImage/ModalImage.tsx#ModalImage',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ModalImage_stories = {
          title: 'Groups/ModalImage',
          component: ModalImage,
          args: {
            srcArray: [
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SKY',
                caption: 'This is the image caption 1.',
              },
              {
                src: Theme.Q.image.exampleSquare,
                title: 'SQUARE',
                caption: 'This is the image caption 2.',
              },
              {
                src: Theme.Q.icon.exampleIconBasic,
                title: 'LOGO',
                caption: 'This is the image caption 3.',
              },
              {
                src: Theme.Q.image.examplePortrait,
                title: 'ICON',
                caption: 'This is the image caption 4.',
              },
            ],
            indexOffset: 0,
            isVisible: !0,
          },
          argTypes: { onClick: { action: 'clicked' } },
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(
            ModalImage,
            (0, objectSpread2.Z)({}, args)
          );
        },
        Basic = Template.bind({}),
        WithOffset = Template.bind({});
      WithOffset.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, WithOffset.args),
        {},
        { indexOffset: 1 }
      );
      var ThreeImage = Template.bind({});
      ThreeImage.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, ThreeImage.args),
        {},
        {
          srcArray: [
            {
              src: Theme.Q.image.exampleLandscape,
              title: 'SKY',
              caption: 'This is the image caption 1.',
            },
            {
              src: Theme.Q.image.exampleSquare,
              title: 'SQUARE',
              caption: 'This is the image caption 2.',
            },
            {
              src: Theme.Q.icon.exampleIconBasic,
              title: 'LOGO',
              caption: 'This is the image caption 3.',
            },
          ],
        }
      );
      var TwoImage = Template.bind({});
      TwoImage.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, TwoImage.args),
        {},
        {
          srcArray: [
            {
              src: Theme.Q.image.exampleLandscape,
              title: 'SKY',
              caption: 'This is the image caption 1.',
            },
            {
              src: Theme.Q.image.exampleSquare,
              title: 'SQUARE',
              caption: 'This is the image caption 2.',
            },
          ],
        }
      );
      var OneImage = Template.bind({});
      OneImage.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, OneImage.args),
        {},
        {
          srcArray: [
            {
              src: Theme.Q.image.exampleLandscape,
              title: 'SKY',
              caption: 'This is the image caption 1.',
            },
          ],
        }
      );
      var NoCaption = Template.bind({});
      NoCaption.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, NoCaption.args),
        {},
        {
          srcArray: [
            {
              src: Theme.Q.image.exampleLandscape,
              title: void 0,
              caption: void 0,
            },
          ],
        }
      );
      var LongCaption = Template.bind({});
      LongCaption.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, LongCaption.args),
        {},
        {
          srcArray: [
            {
              src: Theme.Q.image.exampleLandscape,
              title:
                'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
              caption:
                'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
            },
            {
              src: Theme.Q.image.exampleSquare,
              title:
                'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
              caption:
                'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
            },
          ],
        }
      );
      var NoImage = Template.bind({});
      (NoImage.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, NoImage.args),
        {},
        { srcArray: [] }
      )),
        (Basic.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ModalImage {...args} />' } },
          Basic.parameters
        )),
        (WithOffset.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ModalImage {...args} />' } },
          WithOffset.parameters
        )),
        (ThreeImage.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ModalImage {...args} />' } },
          ThreeImage.parameters
        )),
        (TwoImage.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ModalImage {...args} />' } },
          TwoImage.parameters
        )),
        (OneImage.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ModalImage {...args} />' } },
          OneImage.parameters
        )),
        (NoCaption.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ModalImage {...args} />' } },
          NoCaption.parameters
        )),
        (LongCaption.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ModalImage {...args} />' } },
          LongCaption.parameters
        )),
        (NoImage.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ModalImage {...args} />' } },
          NoImage.parameters
        ));
      var __namedExportsOrder = [
        'Basic',
        'WithOffset',
        'ThreeImage',
        'TwoImage',
        'OneImage',
        'NoCaption',
        'LongCaption',
        'NoImage',
      ];
    },
    './src/UI/components/groups/Project/ProjectLayout/ProjectLayout.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var _templateObject,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/atoms/ImageThumbnail/index.ts'
            ),
          _atoms_ProjectLanding__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectLanding/index.ts'
            ),
          _atoms_Fact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/UI/components/atoms/Fact/index.ts'
          ),
          _atoms_ProjectSectionImage__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionImage/index.ts'
            ),
          _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionText/index.ts'
            ),
          _layout_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './src/UI/components/layout/Grid/index.ts'
          ),
          _ProjectSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            './src/UI/components/groups/Project/ProjectSection/index.ts'
          ),
          _ProjectLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            './src/UI/components/groups/Project/ProjectLayout/ProjectLayout.tsx'
          ),
          _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          Gap = styled_components__WEBPACK_IMPORTED_MODULE_10__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_11__.Z)(
                ['\n  width: 100%;\n  height: 1000px;\n  background: blue;\n']
              ))
          );
        __webpack_exports__.default = {
          title: 'Atoms/ProjectLayout',
          component: _ProjectLayout__WEBPACK_IMPORTED_MODULE_7__.A,
          args: {
            isLandingVisible: !1,
            onLandingClose: function onLandingClose() {
              return console.log('Landing Closed');
            },
            onLandingClick: function onLandingClick() {
              return console.log('Landing Clicked');
            },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                _atoms_ProjectLanding__WEBPACK_IMPORTED_MODULE_1__.y,
                {
                  title: 'SPOTLIGHT',
                  subtitle: 'UI / UX',
                  src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_8__.Q
                    .image.exampleSquare,
                },
                -1
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
                _ProjectSection__WEBPACK_IMPORTED_MODULE_6__.I,
                {
                  title: 'OVERVIEW',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_4__.H,
                      {
                        children:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_4__.H,
                      {
                        children:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_Fact__WEBPACK_IMPORTED_MODULE_2__.z,
                      { label: 'TYPE', value: ' Mobile Application' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_Fact__WEBPACK_IMPORTED_MODULE_2__.z,
                      { label: 'COMPLETION', value: 'June 2022' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_Fact__WEBPACK_IMPORTED_MODULE_2__.z,
                      {
                        label: 'COLLABORATORS',
                        value: 'Elson Liang, Xavier Woo, Perry Wang',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_Fact__WEBPACK_IMPORTED_MODULE_2__.z,
                      { label: 'GITHUB', value: 'Link' }
                    ),
                  ],
                },
                0
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                _ProjectSection__WEBPACK_IMPORTED_MODULE_6__.I,
                {
                  title: 'GALLERY',
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
                    _layout_Grid__WEBPACK_IMPORTED_MODULE_5__.r,
                    {
                      breakpoints: [
                        { minWidth: 0, columnCount: 1 },
                        { minWidth: 600, columnCount: 2 },
                        { minWidth: 1100, columnCount: 3 },
                      ],
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                          _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l,
                          {
                            src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_8__
                              .Q.image.exampleSquare,
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                          _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l,
                          {
                            src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_8__
                              .Q.image.exampleSquare,
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                          _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l,
                          {
                            src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_8__
                              .Q.image.exampleSquare,
                          }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                          _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l,
                          {
                            src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_8__
                              .Q.image.exampleSquare,
                          }
                        ),
                      ],
                    }
                  ),
                },
                1
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
                _ProjectSection__WEBPACK_IMPORTED_MODULE_6__.I,
                {
                  title: 'PROCESS',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_4__.H,
                      {
                        title: 'Concept',
                        children:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_ProjectSectionImage__WEBPACK_IMPORTED_MODULE_3__.N,
                      {
                        src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_8__
                          .Q.image.exampleLandscape,
                        children: 'This is an image',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_4__.H,
                      {
                        children:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                      }
                    ),
                  ],
                },
                2
              ),
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
            'div',
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  _ProjectLayout__WEBPACK_IMPORTED_MODULE_7__.A,
                  (0,
                  C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__.Z)(
                    {},
                    args
                  )
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  Gap,
                  {}
                ),
              ],
            }
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__.Z)(
          {
            storySource: {
              source:
                '(args) => (\n  <div>\n    <ProjectLayout {...args} />\n    <Gap />\n  </div>\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/groups/Project/ProjectSection/ProjectSection.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            ExampleGallery: function () {
              return ExampleGallery;
            },
            ExampleOverview: function () {
              return ExampleOverview;
            },
            ExampleProcess: function () {
              return ExampleProcess;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var _templateObject,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/atoms/ImageThumbnail/index.ts'
            ),
          _atoms_Fact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/atoms/Fact/index.ts'
          ),
          _atoms_ProjectSectionImage__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionImage/index.ts'
            ),
          _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionText/index.ts'
            ),
          _layout_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './src/UI/components/layout/Grid/index.ts'
          ),
          _ProjectSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './src/UI/components/groups/Project/ProjectSection/ProjectSection.tsx'
          ),
          _atoms_ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionFactList/index.ts'
            ),
          _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Groups/ProjectSection',
          component: _ProjectSection__WEBPACK_IMPORTED_MODULE_5__.I,
          args: {
            title: 'OVERVIEW',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_3__.H,
                {
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_3__.H,
                {
                  children:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                _atoms_ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_6__.p,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _atoms_Fact__WEBPACK_IMPORTED_MODULE_1__.z,
                      { label: 'TYPE', value: ' Mobile Application' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _atoms_Fact__WEBPACK_IMPORTED_MODULE_1__.z,
                      { label: 'COMPLETION', value: 'June 2022' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _atoms_Fact__WEBPACK_IMPORTED_MODULE_1__.z,
                      {
                        label: 'COLLABORATORS',
                        value: 'Elson Liang, Xavier Woo, Perry Wang',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _atoms_Fact__WEBPACK_IMPORTED_MODULE_1__.z,
                      { label: 'GITHUB', value: 'Link' }
                    ),
                  ],
                }
              ),
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
              _ProjectSection__WEBPACK_IMPORTED_MODULE_5__.I,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                {},
                args
              )
            );
          },
          ExampleOverview = Template.bind({}),
          StyledGridSquare = (0,
          styled_components__WEBPACK_IMPORTED_MODULE_10__.ZP)(
            _layout_Grid__WEBPACK_IMPORTED_MODULE_4__.r
          )(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_11__.Z)(
                ['\n  padding: 0px;\n']
              ))
          ),
          ExampleGallery = Template.bind({});
        ExampleGallery.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
            {},
            ExampleGallery.args
          ),
          {},
          {
            title: 'GALLERY',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                StyledGridSquare,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l,
                      {
                        src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_7__
                          .Q.image.exampleSquare,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l,
                      {
                        src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_7__
                          .Q.image.exampleSquare,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l,
                      {
                        src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_7__
                          .Q.image.exampleSquare,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                      _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l,
                      {
                        src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_7__
                          .Q.image.exampleSquare,
                      }
                    ),
                  ],
                }
              ),
            ],
          }
        );
        var ExampleProcess = Template.bind({});
        (ExampleProcess.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
            {},
            ExampleProcess.args
          ),
          {},
          {
            title: 'PROCESS',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(
                _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_3__.H,
                {
                  title: 'Concept',
                  children: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n        enim ad minim veniam, quis nostrud exercitation ullamco laboris\n        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n        reprehenderit in voluptate velit esse cillum dolore eu fugiat\n        nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n        do' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n        enim ad minim veniam, quis nostrud exercitation ullamco laboris\n        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n        reprehenderit in voluptate velit esse cillum dolore eu fugiat\n        nulla pariatur. Excepteur sint occaecat cupidatat non.",
                  ],
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_3__.H,
                {
                  title: 'Development',
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                _atoms_ProjectSectionImage__WEBPACK_IMPORTED_MODULE_2__.N,
                {
                  src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_7__.Q
                    .image.exampleLandscape,
                  children: 'This is an image',
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                _atoms_ProjectSectionText__WEBPACK_IMPORTED_MODULE_3__.H,
                {
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                }
              ),
            ],
          }
        )),
          (ExampleOverview.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSection {...args} />\n)',
              },
            },
            ExampleOverview.parameters
          )),
          (ExampleGallery.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSection {...args} />\n)',
              },
            },
            ExampleGallery.parameters
          )),
          (ExampleProcess.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ProjectSection {...args} />\n)',
              },
            },
            ExampleProcess.parameters
          ));
        var __namedExportsOrder = [
          'ExampleOverview',
          'ExampleGallery',
          'ExampleProcess',
        ];
      },
    './src/UI/components/groups/Project/Project/Project.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Project_stories;
          },
        });
      var objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        Fact = __webpack_require__('./src/UI/components/atoms/Fact/index.ts'),
        ImageThumbnail = __webpack_require__(
          './src/UI/components/atoms/ImageThumbnail/index.ts'
        ),
        ProjectSectionImage = __webpack_require__(
          './src/UI/components/atoms/ProjectSectionImage/index.ts'
        ),
        ProjectSectionText = __webpack_require__(
          './src/UI/components/atoms/ProjectSectionText/index.ts'
        ),
        Grid = __webpack_require__('./src/UI/components/layout/Grid/index.ts'),
        ProjectSection = __webpack_require__(
          './src/UI/components/groups/Project/ProjectSection/index.ts'
        ),
        toConsumableArray = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        ProjectLanding = __webpack_require__(
          './src/UI/components/atoms/ProjectLanding/index.ts'
        ),
        ScrollHandler = __webpack_require__(
          './src/UI/components/inputs/ScrollHandler/ScrollHandler.tsx'
        ),
        ProjectLayout = __webpack_require__(
          './src/UI/components/groups/Project/ProjectLayout/ProjectLayout.tsx'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = [
          'landingTitle',
          'landingSubtitle',
          'landingSrc',
          'children',
        ],
        Project = function Project(_ref) {
          var landingTitle = _ref.landingTitle,
            landingSubtitle = _ref.landingSubtitle,
            landingSrc = _ref.landingSrc,
            children = _ref.children,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded),
            _useState = (0, react.useState)(!0),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            isLandingVisible = _useState2[0],
            setIsLandingVisible = _useState2[1],
            _useState3 = (0, react.useState)(!0),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            isScrollLocked = _useState4[0],
            setIsScrollLocked = _useState4[1],
            onDown = function onDown() {
              isLandingVisible &&
                (setIsLandingVisible(!1), setIsScrollLocked(!0));
            };
          return (0, jsx_runtime.jsx)(
            ScrollHandler.Y,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {
                  onDown: onDown,
                  onUp: function onUp() {
                    0 !== window.pageYOffset ||
                      isLandingVisible ||
                      (setIsLandingVisible(!0), setIsScrollLocked(!0));
                  },
                  onScrollWindow: function onScroll() {
                    onDown(),
                      isScrollLocked &&
                        (document.documentElement.scrollTop = 0);
                  },
                  scrollTriggers: [isScrollLocked],
                },
                props
              ),
              {},
              {
                children: (0, jsx_runtime.jsx)(ProjectLayout.A, {
                  isLandingVisible: isLandingVisible,
                  onLandingClick: onDown,
                  onLandingClose: function onLandingClose() {
                    return setIsScrollLocked(!1);
                  },
                  children: [
                    (0, jsx_runtime.jsx)(
                      ProjectLanding.y,
                      {
                        title: landingTitle,
                        subtitle: landingSubtitle,
                        src: landingSrc,
                      },
                      'landing'
                    ),
                  ].concat((0, toConsumableArray.Z)(children)),
                }),
              }
            )
          );
        };
      try {
        (Project.displayName = 'Project'),
          (Project.__docgenInfo = {
            description: '',
            displayName: 'Project',
            props: {
              landingTitle: {
                defaultValue: null,
                description: '',
                name: 'landingTitle',
                required: !1,
                type: { name: 'string' },
              },
              landingSubtitle: {
                defaultValue: null,
                description: '',
                name: 'landingSubtitle',
                required: !1,
                type: { name: 'string' },
              },
              landingSrc: {
                defaultValue: null,
                description: '',
                name: 'landingSrc',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/Project/Project/Project.tsx#Project'
            ] = {
              docgenInfo: Project.__docgenInfo,
              name: 'Project',
              path: 'src/UI/components/groups/Project/Project/Project.tsx#Project',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Project_stories = {
          title: 'Groups/Project',
          component: Project,
          args: {
            landingTitle: 'SPOTLIGHT',
            landingSubtitle: 'UI / UX',
            landingSrc: Theme.Q.image.exampleSquare,
            children: [
              (0, jsx_runtime.jsxs)(
                ProjectSection.I,
                {
                  title: 'OVERVIEW',
                  children: [
                    (0, jsx_runtime.jsx)(ProjectSectionText.H, {
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                    }),
                    (0, jsx_runtime.jsx)(ProjectSectionText.H, {
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                    }),
                    (0, jsx_runtime.jsx)(Fact.z, {
                      label: 'TYPE',
                      value: ' Mobile Application',
                    }),
                    (0, jsx_runtime.jsx)(Fact.z, {
                      label: 'COMPLETION',
                      value: 'June 2022',
                    }),
                    (0, jsx_runtime.jsx)(Fact.z, {
                      label: 'COLLABORATORS',
                      value: 'Elson Liang, Xavier Woo, Perry Wang',
                    }),
                    (0, jsx_runtime.jsx)(Fact.z, {
                      label: 'GITHUB',
                      value: 'Link',
                    }),
                  ],
                },
                0
              ),
              (0, jsx_runtime.jsx)(
                ProjectSection.I,
                {
                  title: 'GALLERY',
                  children: (0, jsx_runtime.jsxs)(Grid.r, {
                    breakpoints: [
                      { minWidth: 0, columnCount: 1 },
                      { minWidth: 600, columnCount: 2 },
                      { minWidth: 1100, columnCount: 3 },
                    ],
                    children: [
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                      (0, jsx_runtime.jsx)(ImageThumbnail.l, {
                        src: Theme.Q.image.exampleSquare,
                      }),
                    ],
                  }),
                },
                1
              ),
              (0, jsx_runtime.jsxs)(
                ProjectSection.I,
                {
                  title: 'PROCESS',
                  children: [
                    (0, jsx_runtime.jsx)(ProjectSectionText.H, {
                      title: 'Concept',
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                    }),
                    (0, jsx_runtime.jsx)(ProjectSectionImage.N, {
                      src: Theme.Q.image.exampleLandscape,
                      children: 'This is an image',
                    }),
                    (0, jsx_runtime.jsx)(ProjectSectionText.H, {
                      children:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
                    }),
                  ],
                },
                2
              ),
            ],
          },
          argTypes: { onClick: { action: 'clicked' } },
        },
        Basic = function Template(args) {
          return (0, jsx_runtime.jsx)(Project, (0, objectSpread2.Z)({}, args));
        }.bind({});
      Basic.parameters = (0, objectSpread2.Z)(
        { storySource: { source: '(args) => <Project {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/groups/Tabs/Tabs.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/groups/Tabs/Tabs.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Groups/Tabs',
        component: _Tabs__WEBPACK_IMPORTED_MODULE_0__.m,
        args: {
          tabs: [
            {
              label: 'VISUAL ARTS',
              isSelected: !0,
              onClick: function onClick() {},
            },
            {
              label: 'UI / UX',
              isSelected: !1,
              onClick: function onClick() {},
            },
            {
              label: 'ARCHITECTURE',
              isSelected: !1,
              onClick: function onClick() {},
            },
          ],
        },
        argTypes: { onClick: { action: 'clicked' } },
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _Tabs__WEBPACK_IMPORTED_MODULE_0__.m,
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            args
          )
        );
      }.bind({});
      Basic.parameters = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        { storySource: { source: '(args) => <Tabs {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/inputs/ButtonModalClose/ButtonModalClose.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _ButtonModalClose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/inputs/ButtonModalClose/ButtonModalClose.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__('./node_modules/react/jsx-runtime.js'));
        __webpack_exports__.default = {
          title: 'Inputs/ButtonModalClose',
          component: _ButtonModalClose__WEBPACK_IMPORTED_MODULE_0__.C,
          args: {},
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _ButtonModalClose__WEBPACK_IMPORTED_MODULE_0__.C,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <ButtonModalClose {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/inputs/ButtonModalNext/ButtonModalNext.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Left: function () {
              return Left;
            },
            Right: function () {
              return Right;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _ButtonModalNext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/inputs/ButtonModalNext/ButtonModalNext.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Inputs/ButtonModalNext',
          component: _ButtonModalNext__WEBPACK_IMPORTED_MODULE_0__.W,
          args: { direction: 'RIGHT' },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _ButtonModalNext__WEBPACK_IMPORTED_MODULE_0__.W,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                args
              )
            );
          },
          Right = Template.bind({}),
          Left = Template.bind({});
        (Left.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Left.args
          ),
          {},
          { direction: 'LEFT' }
        )),
          (Right.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonModalNext {...args} />\n)',
              },
            },
            Right.parameters
          )),
          (Left.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonModalNext {...args} />\n)',
              },
            },
            Left.parameters
          ));
        var __namedExportsOrder = ['Right', 'Left'];
      },
    './src/UI/components/inputs/ButtonModal/ButtonModal.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _ButtonModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/inputs/ButtonModal/ButtonModal.tsx'
        ),
        _styled_icons_zondicons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@styled-icons/zondicons/ArrowRight/ArrowRight.esm.js'
          ),
        _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/atoms/IIconSVG/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Inputs/ButtonModal',
        component: _ButtonModal__WEBPACK_IMPORTED_MODULE_0__.e,
        args: {
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_1__.$,
            {
              size: 64,
              src: _styled_icons_zondicons_ArrowRight__WEBPACK_IMPORTED_MODULE_3__.o,
            }
          ),
        },
        argTypes: { onClick: { action: 'clicked' } },
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _ButtonModal__WEBPACK_IMPORTED_MODULE_0__.e,
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {},
            args
          )
        );
      }.bind({});
      Basic.parameters = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        { storySource: { source: '(args) => <ButtonModal {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/inputs/ButtonReverseText/ButtonReverseText.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Active: function () {
              return Active;
            },
            Basic: function () {
              return Basic;
            },
            Colored: function () {
              return Colored;
            },
            Disabled: function () {
              return Disabled;
            },
            Opposite: function () {
              return Opposite;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
            default: function () {
              return ButtonReverseText_stories;
            },
          });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          Sword_esm = __webpack_require__(
            './node_modules/@styled-icons/remix-fill/Sword/Sword.esm.js'
          ),
          taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          styled_components_browser_esm =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          ButtonReverse = __webpack_require__(
            './src/UI/components/inputs/ButtonReverse/index.ts'
          ),
          RowIconTextButton = __webpack_require__(
            './src/UI/components/atoms/RowIconTextButton/index.ts'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = [
            'children',
            'iconSrc',
            'colorText',
            'colorTextHovered',
            'size',
          ],
          ButtonReverseText = function ButtonReverseText(_ref) {
            var children = _ref.children,
              iconSrc = _ref.iconSrc,
              _ref$colorText = _ref.colorText,
              colorText = void 0 === _ref$colorText ? 'white' : _ref$colorText,
              colorTextHovered = _ref.colorTextHovered,
              _ref$size = _ref.size,
              size = void 0 === _ref$size ? 'medium' : _ref$size,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded);
            return (0, jsx_runtime.jsx)(
              ButtonReverse.$,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, props),
                {},
                {
                  children: (0, jsx_runtime.jsx)(ButtonContent, {
                    $colorText: colorText,
                    $colorTextHovered: colorTextHovered || colorText,
                    text: children,
                    iconSrc: iconSrc,
                    size: size,
                  }),
                }
              )
            );
          },
          ButtonMedium = (0, styled_components_browser_esm.iv)(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  box-sizing: border-box;\n  padding: 0px 16px;\n  height: 36px;\n',
              ]))
          ),
          ButtonSmall = (0, styled_components_browser_esm.iv)(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.Z)([
                '\n  box-sizing: border-box;\n  padding: 0px 12px;\n  height: 32px;\n',
              ]))
          ),
          ButtonContent = (0, styled_components_browser_esm.ZP)(
            RowIconTextButton.I
          )(
            _templateObject3 ||
              (_templateObject3 = (0, taggedTemplateLiteral.Z)([
                '\n  ',
                '\n\n  > * {\n    color: ',
                ';\n  }\n\n  &:hover {\n    > * {\n      color: ',
                ';\n    }\n  }\n',
              ])),
            function (_ref2) {
              return 'medium' === _ref2.size ? ButtonMedium : ButtonSmall;
            },
            function (_ref3) {
              return _ref3.$colorText;
            },
            function (_ref4) {
              return _ref4.$colorTextHovered;
            }
          );
        try {
          (ButtonReverseText.displayName = 'ButtonReverseText'),
            (ButtonReverseText.__docgenInfo = {
              description: '',
              displayName: 'ButtonReverseText',
              props: {
                iconSrc: {
                  defaultValue: null,
                  description: '',
                  name: 'iconSrc',
                  required: !1,
                  type: { name: 'IconSVGType' },
                },
                colorText: {
                  defaultValue: { value: 'white' },
                  description: '',
                  name: 'colorText',
                  required: !1,
                  type: { name: 'string' },
                },
                colorTextHovered: {
                  defaultValue: null,
                  description: '',
                  name: 'colorTextHovered',
                  required: !1,
                  type: { name: 'string' },
                },
                size: {
                  defaultValue: { value: 'medium' },
                  description: '',
                  name: 'size',
                  required: !1,
                  type: {
                    name: 'enum',
                    value: [{ value: '"small"' }, { value: '"medium"' }],
                  },
                },
                isDisabled: {
                  defaultValue: null,
                  description: '',
                  name: 'isDisabled',
                  required: !1,
                  type: { name: 'boolean' },
                },
                border: {
                  defaultValue: null,
                  description: '',
                  name: 'border',
                  required: !1,
                  type: { name: 'string' },
                },
                borderHovered: {
                  defaultValue: null,
                  description: '',
                  name: 'borderHovered',
                  required: !1,
                  type: { name: 'string' },
                },
                color: {
                  defaultValue: null,
                  description: '',
                  name: 'color',
                  required: !1,
                  type: { name: 'string' },
                },
                colorHovered: {
                  defaultValue: null,
                  description: '',
                  name: 'colorHovered',
                  required: !1,
                  type: { name: 'string' },
                },
                onClick: {
                  defaultValue: null,
                  description: '',
                  name: 'onClick',
                  required: !1,
                  type: { name: '(() => void)' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/inputs/ButtonReverseText/ButtonReverseText.tsx#ButtonReverseText'
              ] = {
                docgenInfo: ButtonReverseText.__docgenInfo,
                name: 'ButtonReverseText',
                path: 'src/UI/components/inputs/ButtonReverseText/ButtonReverseText.tsx#ButtonReverseText',
              });
        } catch (__react_docgen_typescript_loader_error) {}
        var ButtonReverseText_stories = {
            title: 'Inputs/ButtonReverseText',
            component: ButtonReverseText,
            args: {
              children: 'ESCAPE',
              icon: Sword_esm.y,
              border: '#F37676',
              borderHovered: '#F37676',
              color: '#F37676',
              colorHovered: 'white',
              colorText: 'white',
              colorTextHovered: '#F37676',
              isActive: !1,
              isDisabled: !1,
            },
            argTypes: { onClick: { action: 'clicked' } },
          },
          Template = function Template(args) {
            return (0, jsx_runtime.jsx)(
              ButtonReverseText,
              (0, objectSpread2.Z)({}, args)
            );
          },
          Basic = Template.bind({}),
          Disabled = Template.bind({});
        Disabled.args = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Disabled.args),
          {},
          { isDisabled: !0 }
        );
        var Colored = Template.bind({});
        Colored.args = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Colored.args),
          {},
          {
            border: 'black',
            borderHovered: 'grey',
            color: 'black',
            colorHovered: 'grey',
          }
        );
        var Opposite = Template.bind({});
        Opposite.args = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Opposite.args),
          {},
          {
            border: 'grey',
            borderHovered: 'grey',
            color: 'white',
            colorHovered: 'grey',
            colorText: 'grey',
            colorTextHovered: 'white',
          }
        );
        var Active = Template.bind({});
        (Active.args = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Active.args),
          {},
          {
            border: 'grey',
            borderHovered: 'grey',
            color: 'white',
            colorHovered: 'white',
            colorText: 'grey',
            colorTextHovered: 'grey',
          }
        )),
          (Basic.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverseText {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (Disabled.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverseText {...args} />\n)',
              },
            },
            Disabled.parameters
          )),
          (Colored.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverseText {...args} />\n)',
              },
            },
            Colored.parameters
          )),
          (Opposite.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverseText {...args} />\n)',
              },
            },
            Opposite.parameters
          )),
          (Active.parameters = (0, objectSpread2.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverseText {...args} />\n)',
              },
            },
            Active.parameters
          ));
        var __namedExportsOrder = [
          'Basic',
          'Disabled',
          'Colored',
          'Opposite',
          'Active',
        ];
      },
    './src/UI/components/inputs/ButtonReverse/ButtonReverse.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Active: function () {
              return Active;
            },
            Basic: function () {
              return Basic;
            },
            Colored: function () {
              return Colored;
            },
            Disabled: function () {
              return Disabled;
            },
            Opposite: function () {
              return Opposite;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _ButtonReverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/inputs/ButtonReverse/ButtonReverse.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Inputs/ButtonReverse',
          component: _ButtonReverse__WEBPACK_IMPORTED_MODULE_0__.$,
          args: {
            children: 'ESCAPE',
            border: '#F37676',
            borderHovered: '#F37676',
            color: '#F37676',
            colorHovered: 'white',
            isActive: !1,
            isDisabled: !1,
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _ButtonReverse__WEBPACK_IMPORTED_MODULE_0__.$,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({}),
          Disabled = Template.bind({});
        Disabled.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Disabled.args
          ),
          {},
          { isDisabled: !0 }
        );
        var Colored = Template.bind({});
        Colored.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Colored.args
          ),
          {},
          {
            border: 'black',
            borderHovered: 'grey',
            color: 'black',
            colorHovered: 'grey',
          }
        );
        var Opposite = Template.bind({});
        Opposite.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Opposite.args
          ),
          {},
          {
            border: 'grey',
            borderHovered: 'grey',
            color: 'white',
            colorHovered: 'grey',
          }
        );
        var Active = Template.bind({});
        (Active.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Active.args
          ),
          {},
          {
            border: 'grey',
            borderHovered: 'grey',
            color: 'white',
            colorHovered: 'white',
          }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverse {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (Disabled.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverse {...args} />\n)',
              },
            },
            Disabled.parameters
          )),
          (Colored.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverse {...args} />\n)',
              },
            },
            Colored.parameters
          )),
          (Opposite.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverse {...args} />\n)',
              },
            },
            Opposite.parameters
          )),
          (Active.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ButtonReverse {...args} />\n)',
              },
            },
            Active.parameters
          ));
        var __namedExportsOrder = [
          'Basic',
          'Disabled',
          'Colored',
          'Opposite',
          'Active',
        ];
      },
    './src/UI/components/inputs/ButtonText/ButtonText.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Colored: function () {
            return Colored;
          },
          Disabled: function () {
            return Disabled;
          },
          Icon: function () {
            return Icon;
          },
          IconColored: function () {
            return IconColored;
          },
          IconDisabled: function () {
            return IconDisabled;
          },
          IconSmall: function () {
            return IconSmall;
          },
          Medium: function () {
            return Medium;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return ButtonText_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        Button = __webpack_require__(
          './src/UI/components/inputs/Button/index.ts'
        ),
        RowIconTextButton = __webpack_require__(
          './src/UI/components/atoms/RowIconTextButton/index.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = [
          'children',
          'iconSrc',
          'colorText',
          'colorTextHovered',
          'size',
        ],
        ButtonText = function ButtonText(_ref) {
          var children = _ref.children,
            iconSrc = _ref.iconSrc,
            _ref$colorText = _ref.colorText,
            colorText = void 0 === _ref$colorText ? 'white' : _ref$colorText,
            colorTextHovered = _ref.colorTextHovered,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'medium' : _ref$size,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            Button.z,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsx)(ButtonContent, {
                  $colorText: colorText,
                  $colorTextHovered: colorTextHovered || colorText,
                  text: children,
                  iconSrc: iconSrc,
                  size: size,
                }),
              }
            )
          );
        },
        ButtonMedium = (0, styled_components_browser_esm.iv)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  padding: 0px 16px;\n  height: 36px;\n',
            ]))
        ),
        ButtonSmall = (0, styled_components_browser_esm.iv)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  padding: 0px 12px;\n  height: 32px;\n',
            ]))
        ),
        ButtonContent = (0, styled_components_browser_esm.ZP)(
          RowIconTextButton.I
        )(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  ',
              '\n\n  > * {\n    color: ',
              ';\n  }\n\n  &:hover {\n    > * {\n      color: ',
              ';\n    }\n  }\n',
            ])),
          function (_ref2) {
            return 'medium' === _ref2.size ? ButtonMedium : ButtonSmall;
          },
          function (_ref3) {
            return _ref3.$colorText;
          },
          function (_ref4) {
            return _ref4.$colorTextHovered;
          }
        );
      try {
        (ButtonText.displayName = 'ButtonText'),
          (ButtonText.__docgenInfo = {
            description: '',
            displayName: 'ButtonText',
            props: {
              iconSrc: {
                defaultValue: null,
                description: '',
                name: 'iconSrc',
                required: !1,
                type: { name: 'IconSVGType' },
              },
              colorText: {
                defaultValue: { value: 'white' },
                description: '',
                name: 'colorText',
                required: !1,
                type: { name: 'string' },
              },
              colorTextHovered: {
                defaultValue: null,
                description: '',
                name: 'colorTextHovered',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"small"' }, { value: '"medium"' }],
                },
              },
              isDisabled: {
                defaultValue: null,
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: { name: 'string' },
              },
              borderHovered: {
                defaultValue: null,
                description: '',
                name: 'borderHovered',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              colorHovered: {
                defaultValue: null,
                description: '',
                name: 'colorHovered',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/ButtonText/ButtonText.tsx#ButtonText'
            ] = {
              docgenInfo: ButtonText.__docgenInfo,
              name: 'ButtonText',
              path: 'src/UI/components/inputs/ButtonText/ButtonText.tsx#ButtonText',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Sword_esm = __webpack_require__(
          './node_modules/@styled-icons/remix-fill/Sword/Sword.esm.js'
        ),
        ButtonText_stories = {
          title: 'Inputs/ButtonText',
          component: ButtonText,
          args: {
            children: 'BUTTON',
            isDisabled: !1,
            color: '#F37676',
            colorHovered: '#F37676',
            colorText: 'white',
            colorTextHovered: 'white',
            size: 'medium',
          },
          argTypes: { onClick: { action: 'clicked' } },
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(
            ButtonText,
            (0, objectSpread2.Z)({}, args)
          );
        },
        Medium = Template.bind({}),
        Colored = Template.bind({});
      Colored.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Colored.args),
        {},
        { color: 'red', colorText: 'blue' }
      );
      var Disabled = Template.bind({});
      Disabled.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Disabled.args),
        {},
        { isDisabled: !0 }
      );
      var Icon = Template.bind({});
      Icon.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Icon.args),
        {},
        { iconSrc: Sword_esm.y }
      );
      var IconColored = Template.bind({});
      IconColored.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, IconColored.args),
        {},
        { iconSrc: Sword_esm.y, color: 'red', colorText: 'blue' }
      );
      var IconDisabled = Template.bind({});
      IconDisabled.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, IconDisabled.args),
        {},
        { iconSrc: Sword_esm.y, isDisabled: !0 }
      );
      var Small = Template.bind({});
      Small.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Small.args),
        {},
        { size: 'small' }
      );
      var IconSmall = Template.bind({});
      (IconSmall.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, IconSmall.args),
        {},
        { size: 'small', iconSrc: Sword_esm.y }
      )),
        (Medium.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ButtonText {...args} />' } },
          Medium.parameters
        )),
        (Colored.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ButtonText {...args} />' } },
          Colored.parameters
        )),
        (Disabled.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ButtonText {...args} />' } },
          Disabled.parameters
        )),
        (Icon.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ButtonText {...args} />' } },
          Icon.parameters
        )),
        (IconColored.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ButtonText {...args} />' } },
          IconColored.parameters
        )),
        (IconDisabled.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ButtonText {...args} />' } },
          IconDisabled.parameters
        )),
        (Small.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ButtonText {...args} />' } },
          Small.parameters
        )),
        (IconSmall.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <ButtonText {...args} />' } },
          IconSmall.parameters
        ));
      var __namedExportsOrder = [
        'Medium',
        'Colored',
        'Disabled',
        'Icon',
        'IconColored',
        'IconDisabled',
        'Small',
        'IconSmall',
      ];
    },
    './src/UI/components/inputs/Button/Button.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          Colored: function () {
            return Colored;
          },
          Disabled: function () {
            return Disabled;
          },
          Icon: function () {
            return Icon;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _Button__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./src/UI/components/inputs/Button/Button.tsx')),
        _styled_icons_remix_fill_Sword__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/@styled-icons/remix-fill/Sword/Sword.esm.js'
          ),
        _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/atoms/IIconSVG/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Inputs/Button',
        component: _Button__WEBPACK_IMPORTED_MODULE_1__.z,
        args: {
          children: 'BUTTON',
          isDisabled: !1,
          border: void 0,
          borderHovered: void 0,
          color: '#F37676',
          colorHovered: void 0,
        },
        argTypes: { onClick: { action: 'clicked' } },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _Button__WEBPACK_IMPORTED_MODULE_1__.z,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              {},
              args
            )
          );
        },
        Basic = Template.bind({}),
        Colored = Template.bind({});
      Colored.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Colored.args
        ),
        {},
        { color: 'red', border: 'black' }
      );
      var Disabled = Template.bind({});
      Disabled.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Disabled.args
        ),
        {},
        { isDisabled: !0 }
      );
      var Icon = Template.bind({});
      (Icon.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Icon.args
        ),
        {},
        {
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_2__.$,
            {
              src: _styled_icons_remix_fill_Sword__WEBPACK_IMPORTED_MODULE_5__.y,
            }
          ),
        }
      )),
        (Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Basic.parameters
        )),
        (Colored.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Colored.parameters
        )),
        (Disabled.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Disabled.parameters
        )),
        (Icon.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Icon.parameters
        ));
      var __namedExportsOrder = ['Basic', 'Colored', 'Disabled', 'Icon'];
    },
    './src/UI/components/inputs/DropdownHeader/DropdownHeader.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            LongText: function () {
              return LongText;
            },
            Medium: function () {
              return Medium;
            },
            NoText: function () {
              return NoText;
            },
            Small: function () {
              return Small;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _DropdownHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/inputs/DropdownHeader/DropdownHeader.tsx'
          ),
          _styled_icons_fluentui_system_regular_ChevronUpDown__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@styled-icons/fluentui-system-regular/ChevronUpDown/ChevronUpDown.esm.js'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Inputs/DropdownHeader',
          component: _DropdownHeader__WEBPACK_IMPORTED_MODULE_0__.A,
          args: {
            size: 'medium',
            icon: _styled_icons_fluentui_system_regular_ChevronUpDown__WEBPACK_IMPORTED_MODULE_2__.j,
            subtitle: 'SORT BY : ',
            title: 'NEWEST',
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _DropdownHeader__WEBPACK_IMPORTED_MODULE_0__.A,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                {},
                args
              )
            );
          },
          Medium = Template.bind({}),
          Small = Template.bind({});
        Small.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            Small.args
          ),
          {},
          { size: 'small' }
        );
        var NoText = Template.bind({});
        NoText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            NoText.args
          ),
          {},
          { title: void 0 }
        );
        var LongText = Template.bind({});
        (LongText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {},
            LongText.args
          ),
          {},
          {
            title:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
          }
        )),
          (Medium.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <DropdownHeader {...args} />\n)',
              },
            },
            Medium.parameters
          )),
          (Small.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <DropdownHeader {...args} />\n)',
              },
            },
            Small.parameters
          )),
          (NoText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <DropdownHeader {...args} />\n)',
              },
            },
            NoText.parameters
          )),
          (LongText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <DropdownHeader {...args} />\n)',
              },
            },
            LongText.parameters
          ));
        var __namedExportsOrder = ['Medium', 'Small', 'NoText', 'LongText'];
      },
    './src/UI/components/inputs/DropdownItem/DropdownItem.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            LongText: function () {
              return LongText;
            },
            Medium: function () {
              return Medium;
            },
            NoText: function () {
              return NoText;
            },
            Selected: function () {
              return Selected;
            },
            Small: function () {
              return Small;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _DropdownItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/inputs/DropdownItem/DropdownItem.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Inputs/DropdownItem',
          component: _DropdownItem__WEBPACK_IMPORTED_MODULE_0__.h,
          args: { size: 'medium', children: 'NEWEST', isSelected: !1 },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _DropdownItem__WEBPACK_IMPORTED_MODULE_0__.h,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                args
              )
            );
          },
          Medium = Template.bind({}),
          Small = Template.bind({});
        Small.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Small.args
          ),
          {},
          { size: 'small' }
        );
        var Selected = Template.bind({});
        Selected.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Selected.args
          ),
          {},
          { isSelected: !0 }
        );
        var NoText = Template.bind({});
        NoText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            NoText.args
          ),
          {},
          { children: '' }
        );
        var LongText = Template.bind({});
        (LongText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            LongText.args
          ),
          {},
          {
            children:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
          }
        )),
          (Medium.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            { storySource: { source: '(args) => <DropdownItem {...args} />' } },
            Medium.parameters
          )),
          (Small.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            { storySource: { source: '(args) => <DropdownItem {...args} />' } },
            Small.parameters
          )),
          (Selected.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            { storySource: { source: '(args) => <DropdownItem {...args} />' } },
            Selected.parameters
          )),
          (NoText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            { storySource: { source: '(args) => <DropdownItem {...args} />' } },
            NoText.parameters
          )),
          (LongText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            { storySource: { source: '(args) => <DropdownItem {...args} />' } },
            LongText.parameters
          ));
        var __namedExportsOrder = [
          'Medium',
          'Small',
          'Selected',
          'NoText',
          'LongText',
        ];
      },
    './src/UI/components/inputs/Dropdown/Dropdown.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Medium: function () {
            return Medium;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/inputs/Dropdown/Dropdown.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Inputs/Dropdown',
        component: _Dropdown__WEBPACK_IMPORTED_MODULE_0__.L,
        args: {
          labelPrefix: 'SORT : ',
          label: void 0,
          tabs: [
            { isSelected: !0, label: 'NEWEST', onClick: function onClick() {} },
            { isSelected: !1, label: 'OLDEST', onClick: function onClick() {} },
            { isSelected: !1, label: 'A - Z', onClick: function onClick() {} },
            { isSelected: !1, label: 'Z - A', onClick: function onClick() {} },
          ],
        },
        argTypes: { onClick: { action: 'clicked' } },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _Dropdown__WEBPACK_IMPORTED_MODULE_0__.L,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        },
        Medium = Template.bind({}),
        Small = Template.bind({});
      (Small.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Small.args
        ),
        {},
        { size: 'small' }
      )),
        (Medium.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Dropdown {...args} />' } },
          Medium.parameters
        )),
        (Small.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Dropdown {...args} />' } },
          Small.parameters
        ));
      var __namedExportsOrder = ['Medium', 'Small'];
    },
    './src/UI/components/inputs/HeaderTab/HeaderTab.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _HeaderTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/inputs/HeaderTab/HeaderTab.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Inputs/HeaderTab',
        component: _HeaderTab__WEBPACK_IMPORTED_MODULE_0__.A,
        args: { children: 'PROJECTS' },
        argTypes: { onClick: { action: 'clicked' } },
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _HeaderTab__WEBPACK_IMPORTED_MODULE_0__.A,
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            args
          )
        );
      }.bind({});
      Basic.parameters = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        { storySource: { source: '(args) => <HeaderTab {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/inputs/IconExternalLink/IconLinkExternal.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _IconLinkExternal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/inputs/IconExternalLink/IconLinkExternal.tsx'
          ),
          _styled_icons_fa_brands_Linkedin__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@styled-icons/fa-brands/Linkedin/Linkedin.esm.js'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Inputs/IconLinkExternal',
          component: _IconLinkExternal__WEBPACK_IMPORTED_MODULE_0__.M,
          args: {
            src: _styled_icons_fa_brands_Linkedin__WEBPACK_IMPORTED_MODULE_2__.n,
            to: 'https://github.com/aythels',
            size: 32,
          },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _IconLinkExternal__WEBPACK_IMPORTED_MODULE_0__.M,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              args
            )
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source: '(args) => (\n  <IconLinkExternal {...args} />\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/inputs/LinkExternalFactText/LinkExternalFactText.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            LongText: function () {
              return LongText;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          _LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/inputs/LinkExternalFactText/LinkExternalFactText.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          );
        __webpack_exports__.default = {
          title: 'Inputs/LinkExternalFactText',
          component: _LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__.o,
          args: { link: '/', children: 'LINK' },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__.o,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({}),
          LongText = Template.bind({});
        (LongText.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            LongText.args
          ),
          {},
          {
            children:
              'There are lots and lots and lots and lots and lots and lots of text here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
          }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <LinkExternalFactText {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (LongText.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <LinkExternalFactText {...args} />\n)',
              },
            },
            LongText.parameters
          ));
        var __namedExportsOrder = ['Basic', 'LongText'];
      },
    './src/UI/components/inputs/LinkFake/LinkFake.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _LinkFake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/inputs/LinkFake/LinkFake.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Inputs/LinkFake',
        component: _LinkFake__WEBPACK_IMPORTED_MODULE_0__.X,
        args: { href: 'https://github.com/aythels', children: 'Click Me' },
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _LinkFake__WEBPACK_IMPORTED_MODULE_0__.X,
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            args
          )
        );
      }.bind({});
      Basic.parameters = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        { storySource: { source: '(args) => <LinkFake {...args} />' } },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/inputs/ScrollHandler/ScrollHandler.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            NoOverflow: function () {
              return NoOverflow;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var _templateObject,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          _ScrollHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './src/UI/components/inputs/ScrollHandler/ScrollHandler.tsx'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          Box = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                [
                  '\n  width: 100px;\n  height: 100px;\n  background: pink;\n  overflow-y: auto;\n',
                ]
              ))
          );
        __webpack_exports__.default = {
          title: 'Inputs/ScrollHandler',
          component: _ScrollHandler__WEBPACK_IMPORTED_MODULE_0__.Y,
          args: {
            onDown: function onDown() {
              return console.log('down');
            },
            onUp: function onUp() {
              return console.log('up');
            },
            onScrollWindow: function onScrollWindow() {
              return console.log('scrolled');
            },
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              Box,
              {
                children:
                  'Foasfioa sfjioassfioafi oasfiojasf ioajfoasjfoisj afiojaiof saiofaiofios',
              }
            ),
          },
          argTypes: { onClick: { action: 'clicked' } },
        };
        var Template = function Template(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _ScrollHandler__WEBPACK_IMPORTED_MODULE_0__.Y,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                args
              )
            );
          },
          Basic = Template.bind({}),
          NoOverflow = Template.bind({});
        (NoOverflow.args = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {},
            NoOverflow.args
          ),
          {},
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              Box,
              {}
            ),
          }
        )),
          (Basic.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ScrollHandler {...args} />\n)',
              },
            },
            Basic.parameters
          )),
          (NoOverflow.parameters = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {
              storySource: {
                source: '(args) => (\n  <ScrollHandler {...args} />\n)',
              },
            },
            NoOverflow.parameters
          ));
        var __namedExportsOrder = ['Basic', 'NoOverflow'];
      },
    './src/UI/components/inputs/Tab/Tab.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          Selected: function () {
            return Selected;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/inputs/Tab/Tab.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Inputs/Tab',
        component: _Tab__WEBPACK_IMPORTED_MODULE_0__.O,
        args: {
          children: 'VISUAL ARTS',
          isSelected: !1,
          onClick: function onClick() {},
        },
        argTypes: { onClick: { action: 'clicked' } },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _Tab__WEBPACK_IMPORTED_MODULE_0__.O,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        },
        Basic = Template.bind({}),
        Selected = Template.bind({});
      (Selected.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Selected.args
        ),
        {},
        { isSelected: !0 }
      )),
        (Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Tab {...args} />' } },
          Basic.parameters
        )),
        (Selected.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Tab {...args} />' } },
          Selected.parameters
        ));
      var __namedExportsOrder = ['Basic', 'Selected'];
    },
    './src/UI/components/layout/GridDynamic/GridDynamic.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Few: function () {
            return Few;
          },
          Many: function () {
            return Many;
          },
          RenderOrderTest: function () {
            return RenderOrderTest;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return GridDynamic_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        scripts_Array = __webpack_require__(
          './src/UI/utility/scripts/Array.ts'
        ),
        ResponsiveProps = __webpack_require__(
          './src/UI/utility/hooks/ResponsiveProps.ts'
        ),
        Grid = __webpack_require__('./src/UI/components/layout/Grid/index.ts'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'breakpoints'],
        DEFAULT_BREAKPOINTS = [
          { minWidth: 0, columnCount: 1 },
          { minWidth: 800, columnCount: 2 },
          { minWidth: 1e3, columnCount: 3 },
        ],
        GridDynamic = function GridDynamic(_ref) {
          var _ref$children = _ref.children,
            children = void 0 === _ref$children ? [] : _ref$children,
            _ref$breakpoints = _ref.breakpoints,
            breakpoints =
              void 0 === _ref$breakpoints
                ? DEFAULT_BREAKPOINTS
                : _ref$breakpoints,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            visible = _useState2[0],
            setVisible = _useState2[1];
          (0, react.useEffect)(function () {
            setTimeout(function () {
              return setVisible(!0);
            }, 100);
          }, []),
            !Array.isArray(children) && (children = [children]);
          for (var COLUMN_COUNT = 3, i = 0; i < breakpoints.length; i++) {
            var breakpoint = breakpoints[i];
            (0, ResponsiveProps.gY)(breakpoint.minWidth) &&
              (COLUMN_COUNT = breakpoint.columnCount);
          }
          return (0, jsx_runtime.jsx)(
            Grid.r,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({ breakpoints: breakpoints }, props),
              {},
              {
                children: (function createColumns(children) {
                  for (
                    var childPartitions = (0, scripts_Array.l8)(
                        children,
                        COLUMN_COUNT
                      ),
                      elements = [],
                      _loop = function _loop(_i) {
                        var imageElements = [];
                        childPartitions[_i].forEach(function (e, j) {
                          imageElements.push(
                            (0, jsx_runtime.jsx)(
                              ItemWrapper,
                              {
                                $visible: visible,
                                $index: children.indexOf(e),
                                children: e,
                              },
                              j
                            )
                          );
                        }),
                          elements.push(
                            (0, jsx_runtime.jsx)(
                              ColumnWrapper,
                              { children: imageElements },
                              _i
                            )
                          );
                      },
                      _i = 0;
                    _i < COLUMN_COUNT;
                    _i++
                  )
                    _loop(_i);
                  return elements;
                })(children),
              }
            )
          );
        },
        ColumnWrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n',
            ]))
        ),
        ItemWrapper = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  opacity: ',
              ';\n  pointer-events: ',
              ';\n\n  transition-duration: ',
              ';\n  transition-timing-function: ease-out;\n  transition-property: opacity;\n  transition-delay: ',
              'ms;\n\n  width: 100%;\n  height: auto;\n',
            ])),
          function (_ref2) {
            return _ref2.$visible ? 1 : 0;
          },
          function (_ref3) {
            return _ref3.$visible ? 'auto' : 'none';
          },
          function (_ref4) {
            return _ref4.theme.speed.slow;
          },
          function (_ref5) {
            return 60 * _ref5.$index;
          }
        );
      try {
        (GridDynamic.displayName = 'GridDynamic'),
          (GridDynamic.__docgenInfo = {
            description: '',
            displayName: 'GridDynamic',
            props: {
              breakpoints: {
                defaultValue: {
                  value:
                    '[\n  {\n    minWidth: 0,\n    columnCount: 1,\n  },\n  {\n    minWidth: 800,\n    columnCount: 2,\n  },\n  {\n    minWidth: 1000,\n    columnCount: 3,\n  },\n]',
                },
                description: '',
                name: 'breakpoints',
                required: !1,
                type: { name: 'GridBreakpoint[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/layout/GridDynamic/GridDynamic.tsx#GridDynamic'
            ] = {
              docgenInfo: GridDynamic.__docgenInfo,
              name: 'GridDynamic',
              path: 'src/UI/components/layout/GridDynamic/GridDynamic.tsx#GridDynamic',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ImageThumbnail = __webpack_require__(
          './src/UI/components/atoms/ImageThumbnail/index.ts'
        ),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        GridDynamic_stories = {
          title: 'Layout/GridDynamic',
          component: GridDynamic,
          args: {
            children: (0, jsx_runtime.jsx)(ImageThumbnail.l, {
              src: Theme.Q.image.exampleSquare,
            }),
          },
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(
            GridDynamic,
            (0, objectSpread2.Z)({}, args)
          );
        },
        Few = Template.bind({});
      Few.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Few.args),
        {},
        {
          children: [
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
              },
              0
            ),
          ],
        }
      );
      var Many = Template.bind({});
      Many.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Many.args),
        {},
        {
          children: [
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '0',
                isTitleVisible: !0,
              },
              0
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.examplePortrait,
                title: 'SOARING SKIES',
                subtitle: '1',
                isTitleVisible: !0,
              },
              1
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.examplePortrait,
                title: 'SOARING SKIES',
                subtitle: '2',
                isTitleVisible: !0,
              },
              2
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '3',
                isTitleVisible: !0,
              },
              3
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '4',
                isTitleVisible: !0,
              },
              4
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.examplePortrait,
                title: 'SOARING SKIES',
                subtitle: '5',
                isTitleVisible: !0,
              },
              5
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '6',
                isTitleVisible: !0,
              },
              6
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '7',
                isTitleVisible: !0,
              },
              7
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '8',
                isTitleVisible: !0,
              },
              8
            ),
          ],
        }
      );
      var RenderOrderTest = Template.bind({});
      (RenderOrderTest.args = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, RenderOrderTest.args),
        {},
        {
          children: [
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '0',
                isTitleVisible: !0,
              },
              0
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '1',
                isTitleVisible: !0,
              },
              1
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '2',
                isTitleVisible: !0,
              },
              2
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '3',
                isTitleVisible: !0,
              },
              3
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '4',
                isTitleVisible: !0,
              },
              4
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '5',
                isTitleVisible: !0,
              },
              5
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '6',
                isTitleVisible: !0,
              },
              6
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '7',
                isTitleVisible: !0,
              },
              7
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '8',
                isTitleVisible: !0,
              },
              8
            ),
            (0, jsx_runtime.jsx)(
              ImageThumbnail.l,
              {
                src: Theme.Q.image.exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '9',
                isTitleVisible: !0,
              },
              9
            ),
          ],
        }
      )),
        (Few.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <GridDynamic {...args} />' } },
          Few.parameters
        )),
        (Many.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <GridDynamic {...args} />' } },
          Many.parameters
        )),
        (RenderOrderTest.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <GridDynamic {...args} />' } },
          RenderOrderTest.parameters
        ));
      var __namedExportsOrder = ['Few', 'Many', 'RenderOrderTest'];
    },
    './src/UI/components/layout/GridRow/GridRow.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Few: function () {
            return Few;
          },
          Many: function () {
            return Many;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _GridRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/layout/GridRow/GridRow.tsx'
        ),
        _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './src/UI/components/atoms/ImageThumbnail/index.ts'
          ),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Layout/GridRow',
        component: _GridRow__WEBPACK_IMPORTED_MODULE_0__.J,
        args: {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
              },
              1
            ),
          ],
          breakpoints: [
            { minWidth: 0, columnCount: 1 },
            { minWidth: 600, columnCount: 2 },
            { minWidth: 800, columnCount: 3 },
            { minWidth: 1200, columnCount: 4 },
          ],
        },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _GridRow__WEBPACK_IMPORTED_MODULE_0__.J,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              {},
              args
            )
          );
        },
        Few = Template.bind({});
      Few.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Few.args
        ),
        {},
        {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
              },
              1
            ),
          ],
        }
      );
      var Many = Template.bind({});
      (Many.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Many.args
        ),
        {},
        {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
              },
              1
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
              },
              2
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
              },
              3
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
              },
              4
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
              },
              5
            ),
          ],
        }
      )),
        (Few.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <GridRow {...args} />' } },
          Few.parameters
        )),
        (Many.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <GridRow {...args} />' } },
          Many.parameters
        ));
      var __namedExportsOrder = ['Few', 'Many'];
    },
    './src/UI/components/layout/Grid/Grid.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Few: function () {
            return Few;
          },
          ManySquare: function () {
            return ManySquare;
          },
          ManyVaried: function () {
            return ManyVaried;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/layout/Grid/Grid.tsx'
        ),
        _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './src/UI/components/atoms/ImageThumbnail/index.ts'
          ),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Layout/Grid',
        component: _Grid__WEBPACK_IMPORTED_MODULE_0__.r,
        args: {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
              },
              1
            ),
          ],
          breakpoints: [
            { minWidth: 0, columnCount: 1 },
            { minWidth: 600, columnCount: 2 },
            { minWidth: 800, columnCount: 3 },
            { minWidth: 1200, columnCount: 4 },
          ],
        },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _Grid__WEBPACK_IMPORTED_MODULE_0__.r,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              {},
              args
            )
          );
        },
        Few = Template.bind({});
      Few.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Few.args
        ),
        {},
        {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
              },
              1
            ),
          ],
        }
      );
      var ManySquare = Template.bind({});
      ManySquare.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          ManySquare.args
        ),
        {},
        {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
                imageWidth: 1,
                imageHeight: 1,
              },
              1
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
                imageWidth: 1,
                imageHeight: 1,
              },
              2
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
                imageWidth: 1,
                imageHeight: 1,
              },
              3
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
                imageWidth: 1,
                imageHeight: 1,
              },
              4
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '2020',
                imageWidth: 1,
                imageHeight: 1,
              },
              5
            ),
          ],
        }
      );
      var ManyVaried = Template.bind({});
      (ManyVaried.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          ManyVaried.args
        ),
        {},
        {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '0',
                isTitleVisible: !0,
              },
              0
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .examplePortrait,
                title: 'SOARING SKIES',
                subtitle: '1',
                isTitleVisible: !0,
              },
              1
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .examplePortrait,
                title: 'SOARING SKIES',
                subtitle: '2',
                isTitleVisible: !0,
              },
              2
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '3',
                isTitleVisible: !0,
              },
              3
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '4',
                isTitleVisible: !0,
              },
              4
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .examplePortrait,
                title: 'SOARING SKIES',
                subtitle: '5',
                isTitleVisible: !0,
              },
              5
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleSquare,
                title: 'SOARING SKIES',
                subtitle: '6',
                isTitleVisible: !0,
              },
              6
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '7',
                isTitleVisible: !0,
              },
              7
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
              _atoms_ImageThumbnail__WEBPACK_IMPORTED_MODULE_1__.l,
              {
                src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q.image
                  .exampleLandscape,
                title: 'SOARING SKIES',
                subtitle: '8',
                isTitleVisible: !0,
              },
              8
            ),
          ],
        }
      )),
        (Few.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <Grid {...args} />' } },
          Few.parameters
        )),
        (ManySquare.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <Grid {...args} />' } },
          ManySquare.parameters
        )),
        (ManyVaried.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <Grid {...args} />' } },
          ManyVaried.parameters
        ));
      var __namedExportsOrder = ['Few', 'ManySquare', 'ManyVaried'];
    },
    './src/UI/components/layout/Modal/Modal.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/layout/Modal/Modal.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Content = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              ['\n  height: 200vh;\n  width: 100vw;\n']
            ))
        );
      __webpack_exports__.default = {
        title: 'Layout/Modal',
        component: _Modal__WEBPACK_IMPORTED_MODULE_0__.u,
        args: { isVisible: !0, children: 'Hello World' },
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('div', {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              Content,
              {}
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _Modal__WEBPACK_IMPORTED_MODULE_0__.u,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                args
              )
            ),
          ],
        });
      }.bind({});
      Basic.parameters = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        {
          storySource: {
            source:
              '(args) => (\n  <div>\n    <Content />\n    <Modal {...args} />\n  </div>\n)',
          },
        },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/layout/RowCenter/RowCenter.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return RowCenter_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'center', 'justify'],
        RowCenter = function RowCenter(_ref) {
          var children = _ref.children,
            center = _ref.center,
            _ref$justify = _ref.justify,
            justify = void 0 === _ref$justify ? 'space-between' : _ref$justify,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsxs)(RowBackground, {
                  $justify: justify,
                  children: [
                    children,
                    (0, jsx_runtime.jsx)(RowForeground, { children: center }),
                  ],
                }),
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  width: 100%;\n',
            ]))
        ),
        RowBackground = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  position: relative;\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  justify-content: ',
              ';\n',
            ])),
          function (_ref2) {
            return _ref2.$justify;
          }
        ),
        RowForeground = styled_components_browser_esm.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  position absolute;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  pointer-events: none; \n\n  > * {\n    pointer-events: auto;\n  }\n',
            ]))
        );
      try {
        (RowCenter.displayName = 'RowCenter'),
          (RowCenter.__docgenInfo = {
            description: '',
            displayName: 'RowCenter',
            props: {
              center: {
                defaultValue: null,
                description: 'The center element',
                name: 'center',
                required: !1,
                type: { name: 'string | Element' },
              },
              justify: {
                defaultValue: { value: 'space-between' },
                description: 'The alignment of child or background elements',
                name: 'justify',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/layout/RowCenter/RowCenter.tsx#RowCenter'
            ] = {
              docgenInfo: RowCenter.__docgenInfo,
              name: 'RowCenter',
              path: 'src/UI/components/layout/RowCenter/RowCenter.tsx#RowCenter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Paragraph = __webpack_require__(
          './src/UI/components/text/Paragraph/Paragraph.tsx'
        ),
        RowCenter_stories = {
          title: 'Layout/RowCenter',
          component: RowCenter,
          args: {
            center: (0, jsx_runtime.jsx)(Paragraph.n, { children: 'Title' }),
            justify: 'space-between',
          },
        },
        Basic = function Template(args) {
          return (0, jsx_runtime.jsxs)(
            RowCenter,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, args),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(Paragraph.n, {
                    children: 'Helloooooooooooooooooooooooooooooooo',
                  }),
                  (0, jsx_runtime.jsx)(Paragraph.n, { children: 'Bye' }),
                ],
              }
            )
          );
        }.bind({});
      Basic.parameters = (0, objectSpread2.Z)(
        {
          storySource: {
            source:
              '(args) => (\n  <RowCenter {...args}>\n    <Paragraph>Helloooooooooooooooooooooooooooooooo</Paragraph>\n    <Paragraph>Bye</Paragraph>\n  </RowCenter>\n)',
          },
        },
        Basic.parameters
      );
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/layout/RowIconText/RowIconText.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          IconOnly: function () {
            return IconOnly;
          },
          TextOnly: function () {
            return TextOnly;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        styled_icons_boxicons_logos__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/@styled-icons/boxicons-logos/Github/Github.esm.js'
          ),
        _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/atoms/IIconSVG/index.ts'
        ),
        _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        _RowIconText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/layout/RowIconText/RowIconText.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Layout/RowIconText',
        component: _RowIconText__WEBPACK_IMPORTED_MODULE_2__.x,
        args: {
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n,
            { isWrapped: !1, children: 'Hello' }
          ),
          icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_0__.$,
            { src: styled_icons_boxicons_logos__WEBPACK_IMPORTED_MODULE_4__.E }
          ),
          gap: 6,
        },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _RowIconText__WEBPACK_IMPORTED_MODULE_2__.x,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              {},
              args
            )
          );
        },
        Basic = Template.bind({});
      Basic.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
        {},
        Basic.args
      );
      var TextOnly = Template.bind({});
      TextOnly.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
          {},
          TextOnly.args
        ),
        {},
        { icon: void 0 }
      );
      var IconOnly = Template.bind({});
      (IconOnly.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
          {},
          IconOnly.args
        ),
        {},
        { children: void 0 }
      )),
        (Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
          { storySource: { source: '(args) => <RowIconText {...args} />' } },
          Basic.parameters
        )),
        (TextOnly.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
          { storySource: { source: '(args) => <RowIconText {...args} />' } },
          TextOnly.parameters
        )),
        (IconOnly.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
          { storySource: { source: '(args) => <RowIconText {...args} />' } },
          IconOnly.parameters
        ));
      var __namedExportsOrder = ['Basic', 'TextOnly', 'IconOnly'];
    },
    './src/UI/components/layout/RowIcon/RowIcon.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: function () {
            return Large;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        styled_icons_boxicons_logos__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/@styled-icons/boxicons-logos/Github/Github.esm.js'
          ),
        styled_icons_boxicons_logos__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/@styled-icons/boxicons-logos/Linkedin/Linkedin.esm.js'
          ),
        styled_icons_entypo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/@styled-icons/entypo/Email/Email.esm.js'
        ),
        _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/atoms/IIconSVG/index.ts'
        ),
        _RowIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/layout/RowIcon/RowIcon.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Layout/RowIcon',
        component: _RowIcon__WEBPACK_IMPORTED_MODULE_1__.M,
        args: {
          size: '24',
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_0__.$,
              {
                src: styled_icons_boxicons_logos__WEBPACK_IMPORTED_MODULE_3__.E,
              }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_0__.$,
              {
                src: styled_icons_boxicons_logos__WEBPACK_IMPORTED_MODULE_4__.n,
              }
            ),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_0__.$,
              { src: styled_icons_entypo__WEBPACK_IMPORTED_MODULE_5__.G }
            ),
          ],
        },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _RowIcon__WEBPACK_IMPORTED_MODULE_1__.M,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              {},
              args
            )
          );
        },
        Small = Template.bind({});
      Small.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
          {},
          Small.args
        ),
        {},
        { size: 24 }
      );
      var Large = Template.bind({});
      (Large.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
          {},
          Large.args
        ),
        {},
        { size: 32 }
      )),
        (Small.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
          { storySource: { source: '(args) => <RowIcon {...args} />' } },
          Small.parameters
        )),
        (Large.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
          { storySource: { source: '(args) => <RowIcon {...args} />' } },
          Large.parameters
        ));
      var __namedExportsOrder = ['Small', 'Large'];
    },
    './src/UI/components/layout/StickyEndsContainer/StickyEndsContainer.stories.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: function () {
              return Basic;
            },
            __namedExportsOrder: function () {
              return __namedExportsOrder;
            },
          });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          _StickyEndsContainer__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './src/UI/components/layout/StickyEndsContainer/StickyEndsContainer.tsx'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          Child = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                ['\n  width: 100%;\n  background-color: lightblue;\n']
              ))
          ),
          Parent = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                [
                  '\n  width: 100%;\n  height: 3000px;\n\n  background-color: pink;\n',
                ]
              ))
          ),
          Gap = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
            _templateObject3 ||
              (_templateObject3 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                ['\n  width: 100%;\n  height: 200px;\n']
              ))
          );
        __webpack_exports__.default = {
          title: 'Layout/StickyEndsContainer',
          component: _StickyEndsContainer__WEBPACK_IMPORTED_MODULE_0__.Y,
          args: {
            topMargin: 20,
            bottomMargin: 20,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              Child,
              {
                children:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui massa, lobortis non dignissim et, aliquet id nunc. Mauris vel odio ac lacus viverra venenatis dictum et ipsum. Nullam accumsan volutpat felis, quis pharetra tortor dapibus non. Integer euismod velit nibh, quis aliquet odio aliquet ut. In hac habitasse platea dictumst. Fusce at quam nec urna laoreet imperdiet. Nam ipsum odio, egestas non urna sit amet, vulputate pulvinar diam. Proin at tempus velit, eu imperdiet diam. Quisque viverra erat non diam dapibus consequat. Mauris volutpat condimentum metus sit amet ultrices. Pellentesque sed malesuada purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui massa, lobortis non dignissim et, aliquet id nunc. Mauris vel odio ac lacus viverra venenatis dictum et ipsum. Nullam accumsan volutpat felis, quis pharetra tortor dapibus non. Integer euismod velit nibh, quis aliquet odio aliquet ut. In hac habitasse platea dictumst. Fusce at quam nec urna laoreet imperdiet. Nam ipsum odio, egestas non urna sit amet, vulputate pulvinar diam. Proin at tempus velit, eu imperdiet diam. Quisque viverra erat non diam dapibus consequat. Mauris volutpat condimentum metus sit amet ultrices. Pellentesque sed malesuada purus.',
              }
            ),
          },
        };
        var Basic = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            'div',
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  Gap,
                  {}
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  Parent,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _StickyEndsContainer__WEBPACK_IMPORTED_MODULE_0__.Y,
                      (0,
                      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                        {},
                        args
                      )
                    ),
                  }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  Gap,
                  {}
                ),
              ],
            }
          );
        }.bind({});
        Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {
            storySource: {
              source:
                '(args) => (\n  <div>\n    <Gap />\n    <Parent>\n      <StickyEndsContainer {...args} />\n    </Parent>\n    <Gap />\n  </div>\n)',
            },
          },
          Basic.parameters
        );
        var __namedExportsOrder = ['Basic'];
      },
    './src/UI/components/layout/TwoColumn/TwoColumn.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AlwaysBroken: function () {
            return AlwaysBroken;
          },
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var _templateObject,
        _templateObject2,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _TwoColumn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/layout/TwoColumn/TwoColumn.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Left = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              ['\n  background-color: yellow;\n']
            ))
        ),
        Right = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              ['\n  background-color: red;\n']
            ))
        );
      __webpack_exports__.default = {
        title: 'Layout/TwoColumn',
        component: _TwoColumn__WEBPACK_IMPORTED_MODULE_0__.z,
        args: {
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Left, {
              children: 'Hello',
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Right, {
              children: 'Bye',
            }),
          ],
          leftRatio: 0.5,
          rightRatio: 0.5,
          breakIfLessThan: 800,
        },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _TwoColumn__WEBPACK_IMPORTED_MODULE_0__.z,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              {},
              args
            )
          );
        },
        Basic = Template.bind({}),
        AlwaysBroken = Template.bind({});
      (AlwaysBroken.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          AlwaysBroken.args
        ),
        {},
        { breakIfLessThan: void 0 }
      )),
        (Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <TwoColumn {...args} />' } },
          Basic.parameters
        )),
        (AlwaysBroken.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          { storySource: { source: '(args) => <TwoColumn {...args} />' } },
          AlwaysBroken.parameters
        ));
      var __namedExportsOrder = ['Basic', 'AlwaysBroken'];
    },
    './src/UI/components/other/Loading/Loading.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          Mobile: function () {
            return Mobile;
          },
          Tablet: function () {
            return Tablet;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          default: function () {
            return Loading_stories;
          },
        });
      var _templateObject,
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        Modal = __webpack_require__(
          './src/UI/components/layout/Modal/index.ts'
        ),
        IconLoading = __webpack_require__(
          './src/UI/components/atoms/IconLoading/IconLoading.tsx'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['isVisible'],
        Loading = function Loading(_ref) {
          var _ref$isVisible = _ref.isVisible,
            isVisible = void 0 !== _ref$isVisible && _ref$isVisible,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({ isVisible: isVisible }, props),
              {},
              { children: (0, jsx_runtime.jsx)(IconLoading.y, {}) }
            )
          );
        },
        Wrapper = (0, styled_components_browser_esm.ZP)(Modal.u)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
            ]))
        );
      try {
        (Loading.displayName = 'Loading'),
          (Loading.__docgenInfo = {
            description: '',
            displayName: 'Loading',
            props: {
              isVisible: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isVisible',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/other/Loading/Loading.tsx#Loading'
            ] = {
              docgenInfo: Loading.__docgenInfo,
              name: 'Loading',
              path: 'src/UI/components/other/Loading/Loading.tsx#Loading',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var preview = __webpack_require__(
          './node_modules/@storybook/addon-viewport/dist/esm/preview.js'
        ),
        Loading_stories = {
          title: 'Other/Loading',
          component: Loading,
          args: { isVisible: !0 },
        },
        Template = function Template(args) {
          return (0, jsx_runtime.jsx)(Loading, (0, objectSpread2.Z)({}, args));
        },
        Basic = Template.bind({});
      Basic.args = (0, objectSpread2.Z)({}, Basic.args);
      var Tablet = Template.bind({});
      Tablet.parameters = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Tablet.parameters),
        {},
        {
          viewport: (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, preview.kp),
            {},
            { defaultViewport: 'tablet' }
          ),
        }
      );
      var Mobile = Template.bind({});
      (Mobile.parameters = (0, objectSpread2.Z)(
        (0, objectSpread2.Z)({}, Mobile.parameters),
        {},
        {
          viewport: (0, objectSpread2.Z)(
            (0, objectSpread2.Z)({}, preview.kp),
            {},
            { defaultViewport: 'mobile2' }
          ),
        }
      )),
        (Basic.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Loading {...args} />' } },
          Basic.parameters
        )),
        (Tablet.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Loading {...args} />' } },
          Tablet.parameters
        )),
        (Mobile.parameters = (0, objectSpread2.Z)(
          { storySource: { source: '(args) => <Loading {...args} />' } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ['Basic', 'Tablet', 'Mobile'];
    },
    './src/UI/components/text/Paragraph/Paragraph.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Bold: function () {
            return Bold;
          },
          Center: function () {
            return Center;
          },
          Large: function () {
            return Large;
          },
          Light: function () {
            return Light;
          },
          LineLongText: function () {
            return LineLongText;
          },
          LongText: function () {
            return LongText;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _Paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/text/Paragraph/Paragraph.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Text/Paragraph',
        component: _Paragraph__WEBPACK_IMPORTED_MODULE_0__.n,
        args: { children: 'Hello World' },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _Paragraph__WEBPACK_IMPORTED_MODULE_0__.n,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        },
        Small = Template.bind({});
      Small.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Small.args
        ),
        {},
        { size: 'small' }
      );
      var Large = Template.bind({});
      Large.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Large.args
        ),
        {},
        { size: 'large' }
      );
      var Light = Template.bind({});
      Light.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Light.args
        ),
        {},
        { weight: 'light1' }
      );
      var Bold = Template.bind({});
      Bold.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Bold.args
        ),
        {},
        { weight: 'bold2' }
      );
      var Center = Template.bind({});
      Center.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Center.args
        ),
        {},
        { textAlign: 'center' }
      );
      var LongText = Template.bind({});
      LongText.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          LongText.args
        ),
        {},
        {
          children:
            'FFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
        }
      );
      var LineLongText = Template.bind({});
      (LineLongText.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          LineLongText.args
        ),
        {},
        {
          isWrapped: !1,
          children:
            'FFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
        }
      )),
        (Small.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Paragraph {...args} />' } },
          Small.parameters
        )),
        (Large.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Paragraph {...args} />' } },
          Large.parameters
        )),
        (Light.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Paragraph {...args} />' } },
          Light.parameters
        )),
        (Bold.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Paragraph {...args} />' } },
          Bold.parameters
        )),
        (Center.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Paragraph {...args} />' } },
          Center.parameters
        )),
        (LongText.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Paragraph {...args} />' } },
          LongText.parameters
        )),
        (LineLongText.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <Paragraph {...args} />' } },
          LineLongText.parameters
        ));
      var __namedExportsOrder = [
        'Small',
        'Large',
        'Light',
        'Bold',
        'Center',
        'LongText',
        'LineLongText',
      ];
    },
    './src/UI/components/text/TextButton/TextButton.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: function () {
            return Basic;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _TextButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/text/TextButton/TextButton.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Text/TextButton',
        component: _TextButton__WEBPACK_IMPORTED_MODULE_0__.A,
        args: { children: 'BUTTON' },
      };
      var Basic = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _TextButton__WEBPACK_IMPORTED_MODULE_0__.A,
          (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            args
          )
        );
      }.bind({});
      (Basic.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        {},
        Basic.args
      )),
        (Basic.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextButton {...args} />' } },
          Basic.parameters
        ));
      var __namedExportsOrder = ['Basic'];
    },
    './src/UI/components/text/TextCaption/TextCaption.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Long: function () {
            return Long;
          },
          Short: function () {
            return Short;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _TextCaption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/text/TextCaption/TextCaption.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Text/TextCaption',
        component: _TextCaption__WEBPACK_IMPORTED_MODULE_0__.$,
        args: { children: 'This is an image caption.', size: 'medium' },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _TextCaption__WEBPACK_IMPORTED_MODULE_0__.$,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        },
        Short = Template.bind({});
      Short.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        {},
        Short.args
      );
      var Long = Template.bind({});
      (Long.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Long.args
        ),
        {},
        {
          children:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        }
      )),
        (Short.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextCaption {...args} />' } },
          Short.parameters
        )),
        (Long.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextCaption {...args} />' } },
          Long.parameters
        ));
      var __namedExportsOrder = ['Short', 'Long'];
    },
    './src/UI/components/text/TextFooter/TextFooter.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Long: function () {
            return Long;
          },
          Short: function () {
            return Short;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _TextFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/text/TextFooter/TextFooter.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Text/TextFooter',
        component: _TextFooter__WEBPACK_IMPORTED_MODULE_0__.M,
        args: { children: 'Footer Text', size: 'medium' },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _TextFooter__WEBPACK_IMPORTED_MODULE_0__.M,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        },
        Short = Template.bind({});
      Short.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        {},
        Short.args
      );
      var Long = Template.bind({});
      (Long.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Long.args
        ),
        {},
        {
          children:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        }
      )),
        (Short.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextFooter {...args} />' } },
          Short.parameters
        )),
        (Long.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextFooter {...args} />' } },
          Long.parameters
        ));
      var __namedExportsOrder = ['Short', 'Long'];
    },
    './src/UI/components/text/TextLink/TextLink.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Long: function () {
            return Long;
          },
          Short: function () {
            return Short;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _TextLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/text/TextLink/TextLink.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Text/TextLink',
        component: _TextLink__WEBPACK_IMPORTED_MODULE_0__.h,
        args: { children: 'This is an link', size: 'medium' },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _TextLink__WEBPACK_IMPORTED_MODULE_0__.h,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        },
        Short = Template.bind({});
      Short.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        {},
        Short.args
      );
      var Long = Template.bind({});
      (Long.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Long.args
        ),
        {},
        {
          children:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        }
      )),
        (Short.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextLink {...args} />' } },
          Short.parameters
        )),
        (Long.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextLink {...args} />' } },
          Long.parameters
        ));
      var __namedExportsOrder = ['Short', 'Long'];
    },
    './src/UI/components/text/TextTitle/TextTitle.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Large: function () {
            return Large;
          },
          Medium: function () {
            return Medium;
          },
          Small: function () {
            return Small;
          },
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
        });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _TextTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/UI/components/text/TextTitle/TextTitle.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Text/TextTitle',
        component: _TextTitle__WEBPACK_IMPORTED_MODULE_0__.w,
        args: { children: 'Title', size: 'medium' },
      };
      var Template = function Template(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _TextTitle__WEBPACK_IMPORTED_MODULE_0__.w,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              {},
              args
            )
          );
        },
        Small = Template.bind({});
      Small.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Small.args
        ),
        {},
        { children: 'THIS IS THE TITLE', size: 'small' }
      );
      var Medium = Template.bind({});
      Medium.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Medium.args
        ),
        {},
        { children: 'THIS IS THE TITLE', size: 'medium' }
      );
      var Large = Template.bind({});
      (Large.args = (0,
      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Large.args
        ),
        {},
        { children: 'THIS IS THE TITLE', size: 'large' }
      )),
        (Small.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextTitle {...args} />' } },
          Small.parameters
        )),
        (Medium.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextTitle {...args} />' } },
          Medium.parameters
        )),
        (Large.parameters = (0,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          { storySource: { source: '(args) => <TextTitle {...args} />' } },
          Large.parameters
        ));
      var __namedExportsOrder = ['Small', 'Medium', 'Large'];
    },
    './.storybook/preview.js-generated-config-entry.js': function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          __namedExportsOrder: function () {
            return __namedExportsOrder;
          },
          decorators: function () {
            return decorators;
          },
          parameters: function () {
            return parameters;
          },
        });
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        react_router = __webpack_require__(
          './node_modules/react-router/index.js'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
          layout: 'fullscreen',
        },
        decorators = [
          function (Story) {
            return (0, jsx_runtime.jsx)(styled_components_browser_esm.f6, {
              theme: Theme.Q,
              children: (0, jsx_runtime.jsx)(Story, {}),
            });
          },
          function (Story) {
            return (0, jsx_runtime.jsx)(react_router.VA, {
              children: (0, jsx_runtime.jsx)(Story, {}),
            });
          },
        ],
        __namedExportsOrder = ['parameters', 'decorators'];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
            return (0, ClientApi.uc)(value);
          case 'argTypes':
            return (0, ClientApi.v9)(value);
          case 'decorators':
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1);
            });
          case 'parameters':
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer);
            });
          case 'render':
            return (0, ClientApi.$P)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), (0, ClientApi.h1)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './src/UI/components/atoms/DiamondLabel/DiamondLabel.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return State;
        },
        f: function () {
          return DiamondLabel;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        State,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _text_TextButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/TextButton/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['size', 'label', 'state', 'onClick'];
      !(function (State) {
        (State[(State.NEUTRAL = 0)] = 'NEUTRAL'),
          (State[(State.SEMIACTIVE = 1)] = 'SEMIACTIVE'),
          (State[(State.ACTIVE = 2)] = 'ACTIVE');
      })(State || (State = {}));
      var DiamondLabel = function DiamondLabel(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? 8 : _ref$size,
            label = _ref.label,
            _ref$state = _ref.state,
            state = void 0 === _ref$state ? State.NEUTRAL : _ref$state,
            onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
              state === State.ACTIVE
            ),
            _useState2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _useState,
              2
            ),
            isActive = _useState2[0],
            setIsActive = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                {
                  onMouseEnter: function onMouseEnter() {
                    return setIsActive(!0);
                  },
                  onMouseLeave: function onMouseLeave() {
                    return setIsActive(!1);
                  },
                  onClick: onClick,
                },
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    DiamondWrapper,
                    {
                      $size: size * Math.sqrt(2),
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        Diamond,
                        { $state: isActive ? State.ACTIVE : state, $size: size }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    Text,
                    { $state: isActive ? State.ACTIVE : state, children: label }
                  ),
                ],
              }
            )
          );
        },
        DiamondStateNeutral = (0,
        styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  box-shadow: inset 0 0 0 1.4px ',
                ';\n  background-color: ',
                ';\n',
              ]
            )),
          function (_ref2) {
            return _ref2.theme.color.textNeutral;
          },
          function (_ref3) {
            return _ref3.theme.color.background;
          }
        ),
        DiamondStateSemiActive = (0,
        styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  box-shadow: inset 0 0 0 1.4px ',
                ';\n  background-color: ',
                ';\n',
              ]
            )),
          function (_ref4) {
            return _ref4.theme.color.text;
          },
          function (_ref5) {
            return _ref5.theme.color.background;
          }
        ),
        DiamondStateActive = (0,
        styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  box-shadow: inset 0 0 0 1.4px ',
                ';\n  background-color: ',
                ';\n',
              ]
            )),
          function (_ref6) {
            return _ref6.theme.color.text;
          },
          function (_ref7) {
            return _ref7.theme.color.text;
          }
        ),
        TextStateNeutral = (0,
        styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject4 ||
            (_templateObject4 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  color: ', ';\n  font-weight: ', ';\n']
            )),
          function (_ref8) {
            return _ref8.theme.color.textNeutral;
          },
          function (_ref9) {
            return _ref9.theme.font.default.weight.regular;
          }
        ),
        TextStateSemiActive = (0,
        styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject5 ||
            (_templateObject5 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  color: ', ';\n  font-weight: ', ';\n']
            )),
          function (_ref10) {
            return _ref10.theme.color.text;
          },
          function (_ref11) {
            return _ref11.theme.font.default.weight.regular;
          }
        ),
        TextStateActive = (0,
        styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject6 ||
            (_templateObject6 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  color: ', ';\n  font-weight: ', ';\n']
            )),
          function (_ref12) {
            return _ref12.theme.color.text;
          },
          function (_ref13) {
            return _ref13.theme.font.default.weight.bold;
          }
        ),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject7 ||
            (_templateObject7 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  display: inline-block;\n  position: relative;\n\n  cursor: pointer;\n',
              ]
            ))
        ),
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_TextButton__WEBPACK_IMPORTED_MODULE_1__.A
        )(
          _templateObject8 ||
            (_templateObject8 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  padding-top: 4px;\n\n  user-select: none;\n\n  font-size: ',
                ';\n  ',
                ';\n',
              ]
            )),
          function (_ref14) {
            return _ref14.theme.font.default.size.tiny;
          },
          function (_ref15) {
            switch (_ref15.$state) {
              case State.NEUTRAL:
                return TextStateNeutral;
              case State.SEMIACTIVE:
                return TextStateSemiActive;
              case State.ACTIVE:
                return TextStateActive;
            }
          }
        ),
        DiamondWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject9 ||
            (_templateObject9 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  overflow: hidden;\n\n  width: ',
                'px;\n  height: ',
                'px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
              ]
            )),
          function (_ref16) {
            return _ref16.$size;
          },
          function (_ref17) {
            return _ref17.$size;
          }
        ),
        Diamond = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject10 ||
            (_templateObject10 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  width: ',
                'px;\n  height: ',
                'px;\n\n  transform: rotate(45deg);\n  transition: ',
                ';\n  ',
                ';\n',
              ]
            )),
          function (_ref18) {
            return _ref18.$size;
          },
          function (_ref19) {
            return _ref19.$size;
          },
          function (_ref20) {
            var theme = _ref20.theme;
            return ''.concat(theme.speed.normal);
          },
          function (_ref21) {
            switch (_ref21.$state) {
              case State.NEUTRAL:
                return DiamondStateNeutral;
              case State.SEMIACTIVE:
                return DiamondStateSemiActive;
              case State.ACTIVE:
                return DiamondStateActive;
            }
          }
        );
      try {
        (DiamondLabel.displayName = 'DiamondLabel'),
          (DiamondLabel.__docgenInfo = {
            description: '',
            displayName: 'DiamondLabel',
            props: {
              size: {
                defaultValue: { value: '8' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'number' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              state: {
                defaultValue: { value: 'State.NEUTRAL' },
                description: '',
                name: 'state',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '0' }, { value: '1' }, { value: '2' }],
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/DiamondLabel/DiamondLabel.tsx#DiamondLabel'
            ] = {
              docgenInfo: DiamondLabel.__docgenInfo,
              name: 'DiamondLabel',
              path: 'src/UI/components/atoms/DiamondLabel/DiamondLabel.tsx#DiamondLabel',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/Fact/Fact.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return Fact;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        _layout_TwoColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/layout/TwoColumn/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['label', 'value', 'isAlwaysWrapped'],
        Fact = function Fact(_ref) {
          var label = _ref.label,
            value = _ref.value,
            isAlwaysWrapped = _ref.isAlwaysWrapped,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                { breakIfLessThan: isAlwaysWrapped ? void 0 : 600 },
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    Label,
                    { isWrapped: !1, children: label }
                  ),
                  'string' == typeof value
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        Text,
                        { children: value }
                      )
                    : value,
                ],
              }
            )
          );
        },
        Wrapper = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _layout_TwoColumn__WEBPACK_IMPORTED_MODULE_2__.z
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  width: 100%;\n  column-gap: 20px;\n']
            ))
        ),
        Label = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
        )(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  color: ',
                ';\n  font-size: ',
                ';\n  letter-spacing: ',
                ';\n  font-weight: ',
                ';\n',
              ]
            )),
          function (_ref2) {
            return _ref2.theme.color.textNeutral;
          },
          function (_ref3) {
            return _ref3.theme.font.default.size.tiny;
          },
          function (_ref4) {
            return _ref4.theme.font.default.wordSpacing.button;
          },
          function (_ref5) {
            return _ref5.theme.font.default.weight.medium;
          }
        ),
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
        )(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  font-weight: ', ';\n']
            )),
          function (_ref6) {
            return _ref6.theme.font.default.weight.bold;
          }
        );
      try {
        (Fact.displayName = 'Fact'),
          (Fact.__docgenInfo = {
            description: '',
            displayName: 'Fact',
            props: {
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'ReactNode' },
              },
              isAlwaysWrapped: {
                defaultValue: null,
                description: '',
                name: 'isAlwaysWrapped',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/Fact/Fact.tsx#Fact'
            ] = {
              docgenInfo: Fact.__docgenInfo,
              name: 'Fact',
              path: 'src/UI/components/atoms/Fact/Fact.tsx#Fact',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/Fact/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return _Fact__WEBPACK_IMPORTED_MODULE_0__.z;
        },
      });
      var _Fact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/Fact/Fact.tsx'
      );
    },
    './src/UI/components/atoms/GalleryProjectPanel/GalleryProjectPanel.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          c: function () {
            return GalleryProjectPanel;
          },
        });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          _templateObject4,
          _templateObject5,
          _templateObject6,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_8__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/text/Paragraph/index.ts'
          ),
          _Fact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/UI/components/atoms/Fact/index.ts'
          ),
          _ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionFactList/index.ts'
            ),
          _ProjectSectionText__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './src/UI/components/atoms/ProjectSectionText/index.ts'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['titleSize', 'title', 'subtitle', 'body', 'facts'],
          GalleryProjectPanel = function GalleryProjectPanel(_ref) {
            var _ref$titleSize = _ref.titleSize,
              titleSize = void 0 === _ref$titleSize ? 'large' : _ref$titleSize,
              title = _ref.title,
              subtitle = _ref.subtitle,
              body = _ref.body,
              facts = _ref.facts,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
              Wrapper,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                      'div',
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            Title,
                            { $size: titleSize, children: title.toUpperCase() }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            Subtitle,
                            { children: subtitle.toUpperCase() }
                          ),
                        ],
                      }
                    ),
                    body.map(function (e, i) {
                      return (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ProjectSectionText__WEBPACK_IMPORTED_MODULE_4__.H, { children: e }, i);
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                      _ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_3__.p,
                      {
                        children: facts.map(function (e, i) {
                          return (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Fact__WEBPACK_IMPORTED_MODULE_2__.z, { label: e.label, isAlwaysWrapped: !0, value: e.value }, i);
                        }),
                      }
                    ),
                  ],
                }
              )
            );
          },
          Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                [
                  '\n  box-sizing: border-box;\n\n  width: 100%;\n  //padding: 20px;\n  //border: 1px solid ',
                  ';\n  transition: ',
                  ';\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n',
                ]
              )),
            function (_ref2) {
              return _ref2.theme.color.outline;
            },
            function (_ref3) {
              var theme = _ref3.theme;
              return ''.concat(theme.speed.normal);
            }
          ),
          TitleSmall = (0, styled_components__WEBPACK_IMPORTED_MODULE_8__.iv)(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                [
                  '\n  font-size: 2.2rem;\n  margin-top: -6px;\n  margin-left: -2px;\n  margin-bottom: 2px;\n',
                ]
              ))
          ),
          TitleMedium = (0, styled_components__WEBPACK_IMPORTED_MODULE_8__.iv)(
            _templateObject3 ||
              (_templateObject3 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                [
                  '\n  font-size: 3rem;\n  margin-top: -6px;\n  margin-left: -2px;\n  margin-bottom: 3px;\n',
                ]
              ))
          ),
          TitleLarge = (0, styled_components__WEBPACK_IMPORTED_MODULE_8__.iv)(
            _templateObject4 ||
              (_templateObject4 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                [
                  '\n  font-size: 4rem;\n  margin-top: -8px;\n  margin-left: -3px;\n  margin-bottom: 3px;\n',
                ]
              ))
          ),
          Title = (0, styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP)(
            _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
          )(
            _templateObject5 ||
              (_templateObject5 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                [
                  '\n  line-height: 1;\n  font-weight: ',
                  ';\n  transition: none;\n\n  ',
                  ';\n',
                ]
              )),
            function (_ref4) {
              return _ref4.theme.font.default.weight.bold;
            },
            function (_ref5) {
              switch (_ref5.$size) {
                case 'small':
                  return TitleSmall;
                case 'medium':
                  return TitleMedium;
                case 'large':
                  return TitleLarge;
              }
            }
          ),
          Subtitle = (0, styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP)(
            _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
          )(
            _templateObject6 ||
              (_templateObject6 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                ['\n  font-size: ', ';\n  font-weight: ', ';\n']
              )),
            function (_ref6) {
              return _ref6.theme.font.default.size.large;
            },
            function (_ref7) {
              return _ref7.theme.font.default.weight.bold;
            }
          );
        try {
          (GalleryProjectPanel.displayName = 'GalleryProjectPanel'),
            (GalleryProjectPanel.__docgenInfo = {
              description: '',
              displayName: 'GalleryProjectPanel',
              props: {
                titleSize: {
                  defaultValue: { value: 'large' },
                  description: '',
                  name: 'titleSize',
                  required: !1,
                  type: {
                    name: 'enum',
                    value: [
                      { value: '"large"' },
                      { value: '"small"' },
                      { value: '"medium"' },
                    ],
                  },
                },
                title: {
                  defaultValue: null,
                  description: '',
                  name: 'title',
                  required: !0,
                  type: { name: 'string' },
                },
                subtitle: {
                  defaultValue: null,
                  description: '',
                  name: 'subtitle',
                  required: !0,
                  type: { name: 'string' },
                },
                body: {
                  defaultValue: null,
                  description: '',
                  name: 'body',
                  required: !0,
                  type: { name: 'string[]' },
                },
                facts: {
                  defaultValue: null,
                  description: '',
                  name: 'facts',
                  required: !0,
                  type: { name: 'Fact[]' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/GalleryProjectPanel/GalleryProjectPanel.tsx#GalleryProjectPanel'
              ] = {
                docgenInfo: GalleryProjectPanel.__docgenInfo,
                name: 'GalleryProjectPanel',
                path: 'src/UI/components/atoms/GalleryProjectPanel/GalleryProjectPanel.tsx#GalleryProjectPanel',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/atoms/HorizontalBulletMenu/HorizontalBulletMenu.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          F: function () {
            return HorizontalBulletMenu;
          },
        });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_4__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['tabs'],
          HorizontalBulletMenu = function HorizontalBulletMenu(_ref) {
            var tabs = _ref.tabs,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              Wrapper,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                    Container,
                    {
                      children: tabs.map(function (e, i) {
                        return (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Bullet, { onClick: e.onClick, $isSelected: !!e.isSelected && e.isSelected }, i);
                      }),
                    }
                  ),
                }
              )
            );
          },
          Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                ['']
              ))
          ),
          Container = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                [
                  '\n  box-sizing: border-box;\n\n  width: 100%\n  padding: 20px;\n\n  display: flex;\n  column-gap: 10px;\n\n  overflow: hidden;\n',
                ]
              ))
          ),
          Bullet = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
            _templateObject3 ||
              (_templateObject3 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                [
                  '\n  cursor: pointer;\n\n  flex-shrink: 0;\n  width: 32px;\n  height: 4px;\n\n  transition: ',
                  ';\n  background: ',
                  ';\n  border: 1px solid ',
                  ';\n\n  &:hover {\n    background: ',
                  ';\n  }\n\n  transition: ',
                  ';\n',
                ]
              )),
            function (_ref2) {
              var theme = _ref2.theme;
              return ''.concat(theme.speed.normal);
            },
            function (_ref3) {
              var theme = _ref3.theme;
              return _ref3.$isSelected
                ? theme.color.backgroundHighlight
                : 'transparent';
            },
            function (_ref4) {
              return _ref4.theme.color.backgroundHighlight;
            },
            function (_ref5) {
              return _ref5.theme.color.backgroundHighlight;
            },
            function (_ref6) {
              var theme = _ref6.theme;
              return ''.concat(theme.speed.normal);
            }
          );
        try {
          (HorizontalBulletMenu.displayName = 'HorizontalBulletMenu'),
            (HorizontalBulletMenu.__docgenInfo = {
              description: '',
              displayName: 'HorizontalBulletMenu',
              props: {
                tabs: {
                  defaultValue: null,
                  description: '',
                  name: 'tabs',
                  required: !0,
                  type: { name: 'HorizontalBulletMenuTab[]' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/HorizontalBulletMenu/HorizontalBulletMenu.tsx#HorizontalBulletMenu'
              ] = {
                docgenInfo: HorizontalBulletMenu.__docgenInfo,
                name: 'HorizontalBulletMenu',
                path: 'src/UI/components/atoms/HorizontalBulletMenu/HorizontalBulletMenu.tsx#HorizontalBulletMenu',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/atoms/IIconSVG/IIconSVG.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        $: function () {
          return IIconSVG;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        _IIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/atoms/IIcon/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['color', 'src', 'children'],
        IIconSVG = function IIconSVG(_ref) {
          var _ref$color = _ref.color,
            color =
              void 0 === _ref$color
                ? _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                    .text
                : _ref$color,
            src = _ref.src,
            props =
              (_ref.children,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                _ref,
                _excluded
              ));
          if ('string' == typeof src && !src.endsWith('.svg'))
            throw 'Source must be a SVG!';
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                { $color: color },
                props
              ),
              {},
              {
                children:
                  'string' == typeof src
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        IconSVG,
                        { $src: src }
                      )
                    : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        IconStyled,
                        { as: src }
                      ),
              }
            )
          );
        },
        Wrapper = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _IIcon__WEBPACK_IMPORTED_MODULE_2__.C
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  color: ', ';\n']
            )),
          function (_ref2) {
            return _ref2.$color;
          }
        ),
        IconStyled = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.svg(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  color: inherit;\n']
            ))
        ),
        IconSVG = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  color: inherit;\n\n  background-color: currentColor;\n  -webkit-mask: ',
                ';\n  mask: ',
                ';\n',
              ]
            )),
          function (_ref3) {
            var $src = _ref3.$src;
            return 'url('.concat($src, ') no-repeat center');
          },
          function (_ref4) {
            var $src = _ref4.$src;
            return 'url('.concat($src, ') no-repeat center');
          }
        );
      try {
        (IIconSVG.displayName = 'IIconSVG'),
          (IIconSVG.__docgenInfo = {
            description: '',
            displayName: 'IIconSVG',
            props: {
              color: {
                defaultValue: { value: 'Theme.color.text' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !0,
                type: {
                  name: 'string | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>',
                },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string | number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/IIconSVG/IIconSVG.tsx#IIconSVG'
            ] = {
              docgenInfo: IIconSVG.__docgenInfo,
              name: 'IIconSVG',
              path: 'src/UI/components/atoms/IIconSVG/IIconSVG.tsx#IIconSVG',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/IIconSVG/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        $: function () {
          return _IIconSVG__WEBPACK_IMPORTED_MODULE_0__.$;
        },
      });
      var _IIconSVG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/IIconSVG/IIconSVG.tsx'
      );
    },
    './src/UI/components/atoms/IIcon/IIcon.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        C: function () {
          return IIcon;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['size', 'children'],
        IIcon = function IIcon(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? 32 : _ref$size,
            children = _ref.children,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                { $size: size },
                props
              ),
              {},
              { children: children }
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              [
                '\n  overflow: hidden;\n  width: ',
                ';\n  height: ',
                ';\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  > * {\n    width: 100%;\n    height: 100%;\n  }\n',
              ]
            )),
          function (_ref2) {
            var $size = _ref2.$size;
            return 'number' == typeof $size ? ''.concat($size, 'px') : $size;
          },
          function (_ref3) {
            var $size = _ref3.$size;
            return 'number' == typeof $size ? ''.concat($size, 'px') : $size;
          }
        );
      try {
        (IIcon.displayName = 'IIcon'),
          (IIcon.__docgenInfo = {
            description: '',
            displayName: 'IIcon',
            props: {
              size: {
                defaultValue: { value: '32' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string | number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/IIcon/IIcon.tsx#IIcon'
            ] = {
              docgenInfo: IIcon.__docgenInfo,
              name: 'IIcon',
              path: 'src/UI/components/atoms/IIcon/IIcon.tsx#IIcon',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/IIcon/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        C: function () {
          return _IIcon__WEBPACK_IMPORTED_MODULE_0__.C;
        },
      });
      var _IIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/IIcon/IIcon.tsx'
      );
    },
    './src/UI/components/atoms/IconLoading/IconLoading.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        y: function () {
          return IconLoading;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _IIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/atoms/IIcon/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['size'],
        IconLoading = function IconLoading(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? 100 : _ref$size,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _IIcon__WEBPACK_IMPORTED_MODULE_1__.C,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                { size: size },
                props
              ),
              {},
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Spinner, {
                  $size: size,
                }),
              }
            )
          );
        },
        Rotate = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.F4)(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n',
              ]
            ))
        ),
        Spinner = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  ', '\n']
            )),
          function (_ref2) {
            var $size = _ref2.$size,
              theme = _ref2.theme;
            return (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(
              _templateObject3 ||
                (_templateObject3 = (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                  [
                    '\n    box-sizing: border-box;\n\n    border: ',
                    'px solid rgba(0, 0, 0, 0.2);\n    border-left: ',
                    'px solid #000000;\n    border-radius: 9999px;\n\n    animation: ',
                    ' ',
                    ' infinite linear;\n  ',
                  ]
                )),
              $size / 6,
              $size / 6,
              Rotate,
              theme.speed.loading
            );
          }
        );
      try {
        (IconLoading.displayName = 'IconLoading'),
          (IconLoading.__docgenInfo = {
            description: '',
            displayName: 'IconLoading',
            props: {
              size: {
                defaultValue: { value: '100' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/IconLoading/IconLoading.tsx#IconLoading'
            ] = {
              docgenInfo: IconLoading.__docgenInfo,
              name: 'IconLoading',
              path: 'src/UI/components/atoms/IconLoading/IconLoading.tsx#IconLoading',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/IconScroll/IconScroll.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        e: function () {
          return IconScroll;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _IIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/atoms/IIcon/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['color'],
        IconScroll = function IconScroll(_ref) {
          var _ref$color = _ref.color,
            color = void 0 === _ref$color ? 'gray' : _ref$color,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            _IIcon__WEBPACK_IMPORTED_MODULE_1__.C,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                props
              ),
              {},
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  IconWrapper,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                      $color: color,
                    }),
                  }
                ),
              }
            )
          );
        },
        Animation = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.F4)(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  0% {\n    opacity: 1;\n    top: calc(25% - 3px); \n  }\n  100% { \n    opacity: 0; \n    top: calc(75% - 3px);\n  }\n',
              ]
            ))
        ),
        IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  position: relative;\n  width: 60%;\n  height: 100%;\n']
            ))
        ),
        Icon = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  width: 100%;\n  height: 100%;\n\n  box-shadow: inset 0 0 0 1px ',
                ";\n  border-radius: 9999px;\n\n  &:before {\n    position: absolute;\n    content: '';\n    width: 15%;\n    aspect-ratio: 1 / 1;\n    left: 0;\n    right: 0;\n    margin: auto;\n\n    background: ",
                ';\n    border-radius: 9999px;\n\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-name: ',
                ';\n  }\n',
              ]
            )),
          function (_ref2) {
            return _ref2.$color;
          },
          function (_ref3) {
            return _ref3.$color;
          },
          Animation
        );
      try {
        (IconScroll.displayName = 'IconScroll'),
          (IconScroll.__docgenInfo = {
            description: '',
            displayName: 'IconScroll',
            props: {
              color: {
                defaultValue: { value: 'gray' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string | number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/IconScroll/IconScroll.tsx#IconScroll'
            ] = {
              docgenInfo: IconScroll.__docgenInfo,
              name: 'IconScroll',
              path: 'src/UI/components/atoms/IconScroll/IconScroll.tsx#IconScroll',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/ImageThumbnail/ImageThumbnail.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        l: function () {
          return ImageThumbnail;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _Image_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/atoms/Image/Image.tsx'
        ),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        _ImageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/UI/components/atoms/ImageTitle/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = [
          'src',
          'title',
          'subtitle',
          'isTitleVisible',
          'imageWidth',
          'imageHeight',
          'containerSize',
          'onClick',
        ],
        ImageThumbnail = function ImageThumbnail(_ref) {
          var src = _ref.src,
            title = _ref.title,
            subtitle = _ref.subtitle,
            _ref$isTitleVisible = _ref.isTitleVisible,
            isTitleVisible =
              void 0 !== _ref$isTitleVisible && _ref$isTitleVisible,
            imageWidth = _ref.imageWidth,
            imageHeight = _ref.imageHeight,
            _ref$containerSize = _ref.containerSize,
            containerSize =
              void 0 === _ref$containerSize ? '100%' : _ref$containerSize,
            onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              _useState,
              2
            ),
            isHovered = _useState2[0],
            setIsHovered = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState4 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              _useState3,
              2
            ),
            isLoaded = _useState4[0],
            setIsLoaded = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                {
                  $imageWidth: imageWidth,
                  $imageHeight: imageHeight,
                  $containerSize: containerSize,
                },
                props
              ),
              {},
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Content, {
                  onClick: onClick,
                  onMouseEnter: function onMouseEnter() {
                    return setIsHovered(!0);
                  },
                  onMouseLeave: function onMouseLeave() {
                    return setIsHovered(!1);
                  },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      ImageStyled,
                      {
                        onLoad: function onLoad() {
                          return setIsLoaded(!0);
                        },
                        $isHovered: isHovered,
                        $isLoaded: isLoaded,
                        src: src,
                      }
                    ),
                    (title || subtitle) &&
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                        ImageTitleStyled,
                        {
                          $isHovered: !!isTitleVisible || isHovered,
                          $isLoaded: isLoaded,
                          title: title,
                          subtitle: subtitle,
                          color:
                            _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_2__.Q
                              .color.background,
                        }
                      ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      Border,
                      {}
                    ),
                  ],
                }),
              }
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
              ['\n  width: ', ';\n\n  aspect-ratio: ', ';\n']
            )),
          function (_ref2) {
            var $containerSize = _ref2.$containerSize;
            return 'number' == typeof $containerSize
              ? ''.concat($containerSize, 'px')
              : $containerSize;
          },
          function (_ref3) {
            var $imageWidth = _ref3.$imageWidth,
              $imageHeight = _ref3.$imageHeight;
            return $imageWidth && $imageHeight
              ? $imageWidth / $imageHeight
              : 'auto';
          }
        ),
        Content = styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
              [
                '\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n  cursor: pointer;\n',
              ]
            ))
        ),
        ImageStyled = (0, styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP)(
          _Image_Image__WEBPACK_IMPORTED_MODULE_1__.E
        )(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
              [
                '\n  display: block;\n\n  width: 100%;\n  min-height: 100%;\n\n  object-fit: cover;\n  user-select: none;\n  pointer-events: none;\n  transition: ',
                ';\n  opacity: ',
                ';\n\n  ',
                ';\n',
              ]
            )),
          function (_ref4) {
            var theme = _ref4.theme;
            return ''.concat(theme.speed.slow);
          },
          function (_ref5) {
            return _ref5.$isLoaded ? 1 : 0;
          },
          function (_ref6) {
            return (
              _ref6.$isHovered &&
              '\n      -webkit-filter: brightness(80%) contrast(125%) saturate(0%);\n      -moz-filter: brightness(80%) contrast(125%) saturate(0%);\n      filter: brightness(80%) contrast(125%) saturate(0%);\n      transform: scale(1.02);\n    '
            );
          }
        ),
        ImageTitleStyled = (0,
        styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP)(
          _ImageTitle__WEBPACK_IMPORTED_MODULE_3__.Y
        )(
          _templateObject4 ||
            (_templateObject4 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
              [
                '\n  box-sizing: border-box;\n  position: absolute;\n\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  padding: 20px;\n  padding-top: 60px;\n\n  ',
                ';\n\n  ',
                '\n\n  background: none;\n  background: ',
                ';\n\n  user-select: none;\n  pointer-events: none;\n',
              ]
            )),
          function (_ref7) {
            var $isHovered = _ref7.$isHovered,
              theme = _ref7.theme;
            return '\n    transition: '
              .concat(theme.speed.slow, ';\n    transition-delay: ')
              .concat($isHovered ? 0 : 400, 'ms;\n    opacity: ')
              .concat($isHovered ? 1 : 0, ';\n  ');
          },
          function (_ref8) {
            return !_ref8.$isLoaded && 'opacity: 0;';
          },
          function (_ref9) {
            var theme = _ref9.theme;
            return ''.concat(theme.color.greyBackdropUp);
          }
        ),
        Border = styled_components__WEBPACK_IMPORTED_MODULE_8__.ZP.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
              [
                '\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n\n  box-shadow: inset 0 0 0 0.8px ',
                ';\n',
              ]
            )),
          function (_ref10) {
            var theme = _ref10.theme;
            return ''.concat(theme.color.outline);
          }
        );
      try {
        (ImageThumbnail.displayName = 'ImageThumbnail'),
          (ImageThumbnail.__docgenInfo = {
            description: '',
            displayName: 'ImageThumbnail',
            props: {
              src: {
                defaultValue: null,
                description: 'The image source',
                name: 'src',
                required: !0,
                type: { name: 'string' },
              },
              title: {
                defaultValue: null,
                description: 'The image title',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              subtitle: {
                defaultValue: null,
                description: 'The image subtitle',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              isTitleVisible: {
                defaultValue: { value: 'false' },
                description:
                  'If the title is always visible or only visible on hover',
                name: 'isTitleVisible',
                required: !1,
                type: { name: 'boolean' },
              },
              imageWidth: {
                defaultValue: null,
                description: 'Image width',
                name: 'imageWidth',
                required: !1,
                type: { name: 'number' },
              },
              imageHeight: {
                defaultValue: null,
                description: 'Image height',
                name: 'imageHeight',
                required: !1,
                type: { name: 'number' },
              },
              containerSize: {
                defaultValue: { value: '100%' },
                description: 'Maximum container size',
                name: 'containerSize',
                required: !1,
                type: { name: 'string | number' },
              },
              onClick: {
                defaultValue: null,
                description: 'Action onclick',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/ImageThumbnail/ImageThumbnail.tsx#ImageThumbnail'
            ] = {
              docgenInfo: ImageThumbnail.__docgenInfo,
              name: 'ImageThumbnail',
              path: 'src/UI/components/atoms/ImageThumbnail/ImageThumbnail.tsx#ImageThumbnail',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/ImageThumbnail/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        l: function () {
          return _ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__.l;
        },
      });
      var _ImageThumbnail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/ImageThumbnail/ImageThumbnail.tsx'
      );
    },
    './src/UI/components/atoms/ImageTitle/ImageTitle.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Y: function () {
          return ImageTitle;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        _text_Paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['title', 'subtitle', 'color', 'size'],
        ImageTitle = function ImageTitle(_ref) {
          var title = _ref.title,
            subtitle = _ref.subtitle,
            _ref$color = _ref.color,
            color =
              void 0 === _ref$color
                ? _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                    .text
                : _ref$color,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'small' : _ref$size,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                {},
                props
              ),
              {},
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Content, {
                  $size: size,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      TextTitle,
                      {
                        $size: size,
                        isWrapped: !1,
                        color: color,
                        children: title,
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      TextSubtitle,
                      {
                        $size: size,
                        isWrapped: !1,
                        color: color,
                        children: subtitle,
                      }
                    ),
                  ],
                }),
              }
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['']
            ))
        ),
        Content = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  width: 100%;\n  height: ',
                'px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n',
              ]
            )),
          function (_ref2) {
            return 'medium' === _ref2.$size ? 54 : 40;
          }
        ),
        TextSubtitle = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_2__.n
        )(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  font-size: ', ';\n  font-weight: ', ';\n']
            )),
          function (_ref3) {
            var $size = _ref3.$size,
              theme = _ref3.theme;
            return 'medium' === $size
              ? theme.font.default.size.large
              : theme.font.default.size.small;
          },
          function (_ref4) {
            return _ref4.theme.font.default.weight.medium;
          }
        ),
        TextTitle = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_2__.n
        )(
          _templateObject4 ||
            (_templateObject4 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  font-size: ', ';\n  font-weight: ', ';\n']
            )),
          function (_ref5) {
            var $size = _ref5.$size,
              theme = _ref5.theme;
            return 'medium' === $size
              ? theme.font.default.size.h4
              : theme.font.default.size.large;
          },
          function (_ref6) {
            return _ref6.theme.font.default.weight.bold;
          }
        );
      try {
        (ImageTitle.displayName = 'ImageTitle'),
          (ImageTitle.__docgenInfo = {
            description: '',
            displayName: 'ImageTitle',
            props: {
              title: {
                defaultValue: null,
                description: 'The image title',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              subtitle: {
                defaultValue: null,
                description: 'The image subtitle',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: 'Theme.color.text' },
                description: 'Text color',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: 'small' },
                description: 'Text size',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"small"' }, { value: '"medium"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/ImageTitle/ImageTitle.tsx#ImageTitle'
            ] = {
              docgenInfo: ImageTitle.__docgenInfo,
              name: 'ImageTitle',
              path: 'src/UI/components/atoms/ImageTitle/ImageTitle.tsx#ImageTitle',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/ImageTitle/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Y: function () {
          return _ImageTitle__WEBPACK_IMPORTED_MODULE_0__.Y;
        },
      });
      var _ImageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/ImageTitle/ImageTitle.tsx'
      );
    },
    './src/UI/components/atoms/Image/Image.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        E: function () {
          return Image;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['src'],
        Image = function Image(_ref) {
          var src = _ref.src,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            ImageStyled,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              { src: src, alt: 'img' },
              props
            )
          );
        },
        ImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.img(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              [
                '\n  display: block;\n  user-select: none;\n  pointer-events: none;\n',
              ]
            ))
        );
      try {
        (Image.displayName = 'Image'),
          (Image.__docgenInfo = {
            description: '',
            displayName: 'Image',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/Image/Image.tsx#Image'
            ] = {
              docgenInfo: Image.__docgenInfo,
              name: 'Image',
              path: 'src/UI/components/atoms/Image/Image.tsx#Image',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/Image/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        E: function () {
          return _Image__WEBPACK_IMPORTED_MODULE_0__.E;
        },
      });
      var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/Image/Image.tsx'
      );
    },
    './src/UI/components/atoms/ProgressLine/ProgressLine.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        C: function () {
          return ProgressLine;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = [
          'lineStart',
          'lineWidth',
          'backLineColor',
          'frontLineColor',
        ],
        ProgressLine = function ProgressLine(_ref) {
          var _ref$lineStart = _ref.lineStart,
            lineStart = void 0 === _ref$lineStart ? 0 : _ref$lineStart,
            _ref$lineWidth = _ref.lineWidth,
            lineWidth = void 0 === _ref$lineWidth ? 100 : _ref$lineWidth,
            _ref$backLineColor = _ref.backLineColor,
            backLineColor =
              void 0 === _ref$backLineColor
                ? _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                    .outline
                : _ref$backLineColor,
            _ref$frontLineColor = _ref.frontLineColor,
            frontLineColor =
              void 0 === _ref$frontLineColor
                ? _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                    .text
                : _ref$frontLineColor,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    BackLine,
                    { $color: backLineColor }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    FrontLine,
                    {
                      $color: frontLineColor,
                      $lineStart:
                        'number' == typeof lineStart
                          ? ''.concat(lineStart, 'px')
                          : lineStart,
                      $lineWidth:
                        'number' == typeof lineWidth
                          ? ''.concat(lineWidth, 'px')
                          : lineWidth,
                    }
                  ),
                ],
              }
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  position: relative;\n\n  width: 200px;\n  height: 2px;\n\n  overflow: hidden;\n',
              ]
            ))
        ),
        FrontLine = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  position: absolute;\n\n  height: 100%;\n  width: ',
                ';\n  left: min(max(',
                ', 0px), 100%);\n  bottom: 0px;\n\n  background: ',
                ';\n  transition: ',
                ';\n',
              ]
            )),
          function (_ref2) {
            return _ref2.$lineWidth;
          },
          function (_ref3) {
            return _ref3.$lineStart;
          },
          function (_ref4) {
            return _ref4.$color;
          },
          function (_ref5) {
            var theme = _ref5.theme;
            return ''.concat(theme.speed.normal);
          }
        ),
        BackLine = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  position: absolute;\n\n  height: 1px;\n  width: 100%;\n  left: 0px;\n  bottom: 0px;\n\n  background: ',
                ';\n',
              ]
            )),
          function (_ref6) {
            return _ref6.$color;
          }
        );
      try {
        (ProgressLine.displayName = 'ProgressLine'),
          (ProgressLine.__docgenInfo = {
            description: '',
            displayName: 'ProgressLine',
            props: {
              lineStart: {
                defaultValue: { value: '0' },
                description: '',
                name: 'lineStart',
                required: !1,
                type: { name: 'string | number' },
              },
              lineWidth: {
                defaultValue: { value: '100' },
                description: '',
                name: 'lineWidth',
                required: !1,
                type: { name: 'string | number' },
              },
              backLineColor: {
                defaultValue: { value: 'Theme.color.outline' },
                description: '',
                name: 'backLineColor',
                required: !1,
                type: { name: 'string' },
              },
              frontLineColor: {
                defaultValue: { value: 'Theme.color.text' },
                description: '',
                name: 'frontLineColor',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/ProgressLine/ProgressLine.tsx#ProgressLine'
            ] = {
              docgenInfo: ProgressLine.__docgenInfo,
              name: 'ProgressLine',
              path: 'src/UI/components/atoms/ProgressLine/ProgressLine.tsx#ProgressLine',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/ProgressLine/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        C: function () {
          return _ProgressLine__WEBPACK_IMPORTED_MODULE_0__.C;
        },
      });
      var _ProgressLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/ProgressLine/ProgressLine.tsx'
      );
    },
    './src/UI/components/atoms/ProjectLanding/ProjectLanding.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        y: function () {
          return ProjectLanding;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        ResponsiveProps = __webpack_require__(
          './src/UI/utility/hooks/ResponsiveProps.ts'
        ),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        IconScroll = __webpack_require__(
          './src/UI/components/atoms/IconScroll/IconScroll.tsx'
        ),
        Image = __webpack_require__(
          './src/UI/components/atoms/Image/Image.tsx'
        ),
        ImageTitle = __webpack_require__(
          './src/UI/components/atoms/ImageTitle/index.ts'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['src', 'subtitle', 'title', 'isContained', 'textColor'],
        ProjectLanding = function ProjectLanding(_ref) {
          var src = _ref.src,
            _ref$subtitle = _ref.subtitle,
            subtitle = void 0 === _ref$subtitle ? '' : _ref$subtitle,
            _ref$title = _ref.title,
            title = void 0 === _ref$title ? '' : _ref$title,
            _ref$isContained = _ref.isContained,
            isContained = void 0 !== _ref$isContained && _ref$isContained,
            _ref$textColor = _ref.textColor,
            textColor =
              void 0 === _ref$textColor
                ? Theme.Q.color.background
                : _ref$textColor,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded),
            isMobile = (0, ResponsiveProps.mE)(600);
          return (0, jsx_runtime.jsx)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: (0, jsx_runtime.jsxs)(Content, {
                  children: [
                    (0, jsx_runtime.jsx)(ImageStyled, {
                      $isContained: isContained,
                      src: src,
                    }),
                    (0, jsx_runtime.jsxs)(BottomWrapper, {
                      children: [
                        (0, jsx_runtime.jsx)(ImageTitle.Y, {
                          size: isMobile ? 'small' : 'medium',
                          color: textColor,
                          title: title,
                          subtitle: subtitle,
                        }),
                        (0, jsx_runtime.jsx)(Icon, { color: textColor }),
                      ],
                    }),
                  ],
                }),
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n  height: 100vh;\n',
            ]))
        ),
        Content = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n  height: 100%;\n  position: relative;\n\n  user-select: none;\n  cursor: pointer;\n',
            ]))
        ),
        ImageStyled = (0, styled_components_browser_esm.ZP)(Image.E)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  object-fit: ',
              ';\n',
            ])),
          function (_ref2) {
            return _ref2.$isContained ? 'contain' : 'cover';
          }
        ),
        BottomWrapper = styled_components_browser_esm.ZP.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  padding: 20px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  column-gap: 20px;\n',
            ]))
        ),
        Icon = (0, styled_components_browser_esm.ZP)(IconScroll.e)(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.Z)([
              '\n  flex-shrink: 0;\n',
            ]))
        );
      try {
        (ProjectLanding.displayName = 'ProjectLanding'),
          (ProjectLanding.__docgenInfo = {
            description: '',
            displayName: 'ProjectLanding',
            props: {
              src: {
                defaultValue: null,
                description: '',
                name: 'src',
                required: !0,
                type: { name: 'string' },
              },
              subtitle: {
                defaultValue: { value: '' },
                description: '',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              title: {
                defaultValue: { value: '' },
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              isContained: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isContained',
                required: !1,
                type: { name: 'boolean' },
              },
              textColor: {
                defaultValue: { value: 'Theme.color.background' },
                description: '',
                name: 'textColor',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/atoms/ProjectLanding/ProjectLanding.tsx#ProjectLanding'
            ] = {
              docgenInfo: ProjectLanding.__docgenInfo,
              name: 'ProjectLanding',
              path: 'src/UI/components/atoms/ProjectLanding/ProjectLanding.tsx#ProjectLanding',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/atoms/ProjectLanding/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        y: function () {
          return _ProjectLanding__WEBPACK_IMPORTED_MODULE_0__.y;
        },
      });
      var _ProjectLanding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/ProjectLanding/ProjectLanding.tsx'
      );
    },
    './src/UI/components/atoms/ProjectMenuHorizontal/ProjectMenuHorizontal.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          p: function () {
            return ProjectMenuHorizontal;
          },
        });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          _templateObject4,
          taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          toConsumableArray = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
          ),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          styled_components_browser_esm =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          DiamondLabel = __webpack_require__(
            './src/UI/components/atoms/DiamondLabel/DiamondLabel.tsx'
          ),
          ProgressLine = __webpack_require__(
            './src/UI/components/atoms/ProgressLine/index.ts'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['tabs', 'progress'],
          ProjectMenuHorizontal = function ProjectMenuHorizontal(_ref) {
            var tabs = _ref.tabs,
              _ref$progress = _ref.progress,
              progress = void 0 === _ref$progress ? 0 : _ref$progress,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded),
              lastActiveTab = (0, toConsumableArray.Z)(tabs)
                .reverse()
                .find(function (e) {
                  return e.isActive;
                }),
              lastActiveIndex = tabs.findIndex(function (e) {
                return e === lastActiveTab;
              }),
              progressStr = ''.concat(
                100 * Math.max(0, Math.min(progress, 1)),
                '%'
              );
            return (0, jsx_runtime.jsx)(
              Wrapper,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, props),
                {},
                {
                  children: (0, jsx_runtime.jsxs)(Content, {
                    children: [
                      (0, jsx_runtime.jsx)(LineWrapper, {
                        children: (0, jsx_runtime.jsx)(ProgressLine.C, {
                          lineStart: 0,
                          lineWidth: progressStr,
                          backLineColor: Theme.Q.color.textNeutral,
                        }),
                      }),
                      (0, jsx_runtime.jsx)(DiamondRow, {
                        children: tabs.map(function (e, i) {
                          return (0,
                          jsx_runtime.jsx)(DiamondLabel.f, { label: e.label, state: i <= lastActiveIndex ? (i === lastActiveIndex ? DiamondLabel.Z.ACTIVE : DiamondLabel.Z.SEMIACTIVE) : DiamondLabel.Z.NEUTRAL, onClick: e.onClick }, i);
                        }),
                      }),
                    ],
                  }),
                }
              )
            );
          },
          Wrapper = styled_components_browser_esm.ZP.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  padding-bottom: 30px;\n\n  pointer-events: none;\n  user-select: none;\n\n  border-bottom: 1px solid ',
                ';\n  background: ',
                ';\n',
              ])),
            function (_ref2) {
              return _ref2.theme.color.outline;
            },
            function (_ref3) {
              return _ref3.theme.color.background;
            }
          ),
          Content = styled_components_browser_esm.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.Z)([
                '\n  overflow-x: clip;\n  overflow-y: visible;\n  position: relative;\n  width: 100%;\n',
              ]))
          ),
          LineWrapper = styled_components_browser_esm.ZP.div(
            _templateObject3 ||
              (_templateObject3 = (0, taggedTemplateLiteral.Z)([
                '\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n\n  > * {\n    width: 100%;\n    height: 1px;\n  }\n',
              ]))
          ),
          DiamondRow = styled_components_browser_esm.ZP.div(
            _templateObject4 ||
              (_templateObject4 = (0, taggedTemplateLiteral.Z)([
                '\n  display: flex;\n  justify-content: space-evenly;\n  pointer-events: auto;\n',
              ]))
          );
        try {
          (ProjectMenuHorizontal.displayName = 'ProjectMenuHorizontal'),
            (ProjectMenuHorizontal.__docgenInfo = {
              description: '',
              displayName: 'ProjectMenuHorizontal',
              props: {
                tabs: {
                  defaultValue: null,
                  description: '',
                  name: 'tabs',
                  required: !0,
                  type: { name: 'ProjectMenuHorizontalTab[]' },
                },
                progress: {
                  defaultValue: { value: '0' },
                  description: '',
                  name: 'progress',
                  required: !1,
                  type: { name: 'number' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/ProjectMenuHorizontal/ProjectMenuHorizontal.tsx#ProjectMenuHorizontal'
              ] = {
                docgenInfo: ProjectMenuHorizontal.__docgenInfo,
                name: 'ProjectMenuHorizontal',
                path: 'src/UI/components/atoms/ProjectMenuHorizontal/ProjectMenuHorizontal.tsx#ProjectMenuHorizontal',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/atoms/ProjectSectionFactList/ProjectSectionFactList.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          p: function () {
            return ProjectSectionFactList;
          },
        });
        var _templateObject,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_4__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['children'],
          ProjectSectionFactList = function ProjectSectionFactList(_ref) {
            var children = _ref.children,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              Wrapper,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                  {},
                  props
                ),
                {},
                { children: children }
              )
            );
          },
          Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                [
                  '\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n',
                ]
              ))
          );
        try {
          (ProjectSectionFactList.displayName = 'ProjectSectionFactList'),
            (ProjectSectionFactList.__docgenInfo = {
              description: '',
              displayName: 'ProjectSectionFactList',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/ProjectSectionFactList/ProjectSectionFactList.tsx#ProjectSectionFactList'
              ] = {
                docgenInfo: ProjectSectionFactList.__docgenInfo,
                name: 'ProjectSectionFactList',
                path: 'src/UI/components/atoms/ProjectSectionFactList/ProjectSectionFactList.tsx#ProjectSectionFactList',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/atoms/ProjectSectionFactList/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        p: function () {
          return _ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_0__.p;
        },
      });
      var _ProjectSectionFactList__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          './src/UI/components/atoms/ProjectSectionFactList/ProjectSectionFactList.tsx'
        );
    },
    './src/UI/components/atoms/ProjectSectionImage/ProjectSectionImage.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          N: function () {
            return ProjectSectionImage;
          },
        });
        var _templateObject,
          _templateObject2,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_6__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _text_TextCaption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/text/TextCaption/index.ts'
          ),
          _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/UI/components/atoms/Image/index.ts'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['src', 'children'],
          ProjectSectionImage = function ProjectSectionImage(_ref) {
            var src = _ref.src,
              children = _ref.children,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
              Wrapper,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      StyledImage,
                      { src: src }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _text_TextCaption__WEBPACK_IMPORTED_MODULE_1__.$,
                      { children: children }
                    ),
                  ],
                }
              )
            );
          },
          Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                ['\n  width: 100%;\n']
              ))
          ),
          StyledImage = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            _Image__WEBPACK_IMPORTED_MODULE_2__.E
          )(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                ['\n  width: 100%;\n  margin-bottom: 4px;\n']
              ))
          );
        try {
          (ProjectSectionImage.displayName = 'ProjectSectionImage'),
            (ProjectSectionImage.__docgenInfo = {
              description: '',
              displayName: 'ProjectSectionImage',
              props: {
                src: {
                  defaultValue: null,
                  description: '',
                  name: 'src',
                  required: !0,
                  type: { name: 'string' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/ProjectSectionImage/ProjectSectionImage.tsx#ProjectSectionImage'
              ] = {
                docgenInfo: ProjectSectionImage.__docgenInfo,
                name: 'ProjectSectionImage',
                path: 'src/UI/components/atoms/ProjectSectionImage/ProjectSectionImage.tsx#ProjectSectionImage',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/atoms/ProjectSectionImage/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        N: function () {
          return _ProjectSectionImage__WEBPACK_IMPORTED_MODULE_0__.N;
        },
      });
      var _ProjectSectionImage__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          './src/UI/components/atoms/ProjectSectionImage/ProjectSectionImage.tsx'
        );
    },
    './src/UI/components/atoms/ProjectSectionText/ProjectSectionText.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          H: function () {
            return ProjectSectionText;
          },
        });
        var _templateObject,
          _templateObject2,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_5__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/text/Paragraph/index.ts'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['title', 'children'],
          ProjectSectionText = function ProjectSectionText(_ref) {
            var title = _ref.title,
              children = _ref.children,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                _ref,
                _excluded
              );
            return (
              !Array.isArray(children) && (children = [children]),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                Wrapper,
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                  (0,
                  C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    {},
                    props
                  ),
                  {},
                  {
                    children: [
                      title &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          Title,
                          { children: title }
                        ),
                      children.map(function (e, i) {
                        return (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n, { children: e }, i);
                      }),
                    ],
                  }
                )
              )
            );
          },
          Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                [
                  '\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n',
                ]
              ))
          ),
          Title = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
            _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
          )(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                ['\n  font-size: ', ';\n  font-weight: ', ';\n']
              )),
            function (_ref2) {
              return _ref2.theme.font.default.size.large;
            },
            function (_ref3) {
              return _ref3.theme.font.default.weight.bold;
            }
          );
        try {
          (ProjectSectionText.displayName = 'ProjectSectionText'),
            (ProjectSectionText.__docgenInfo = {
              description: '',
              displayName: 'ProjectSectionText',
              props: {
                title: {
                  defaultValue: null,
                  description: '',
                  name: 'title',
                  required: !1,
                  type: { name: 'string' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/ProjectSectionText/ProjectSectionText.tsx#ProjectSectionText'
              ] = {
                docgenInfo: ProjectSectionText.__docgenInfo,
                name: 'ProjectSectionText',
                path: 'src/UI/components/atoms/ProjectSectionText/ProjectSectionText.tsx#ProjectSectionText',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/atoms/ProjectSectionText/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        H: function () {
          return _ProjectSectionText__WEBPACK_IMPORTED_MODULE_0__.H;
        },
      });
      var _ProjectSectionText__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          './src/UI/components/atoms/ProjectSectionText/ProjectSectionText.tsx'
        );
    },
    './src/UI/components/atoms/ProjectSectionTitle/ProjectSectionTitle.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          M: function () {
            return ProjectSectionTitle;
          },
        });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          _templateObject4,
          _templateObject5,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_5__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _text_TextButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/text/TextButton/index.ts'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['children'],
          ProjectSectionTitle = function ProjectSectionTitle(_ref) {
            var children = _ref.children,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              Wrapper,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Row, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        DividerLeft,
                        {}
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        _text_TextButton__WEBPACK_IMPORTED_MODULE_1__.A,
                        {
                          isWrapped: !1,
                          size: 'h5',
                          weight: 'semiBold',
                          children: children,
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        DividerRight,
                        {}
                      ),
                    ],
                  }),
                }
              )
            );
          },
          Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                ['\n  overflow: hidden;\n\n  width: 100%;\n  height: 64px;\n']
              ))
          ),
          Row = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                [
                  '\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n',
                ]
              ))
          ),
          Divider = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(
            _templateObject3 ||
              (_templateObject3 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                [
                  '\n  flex-grow 1;\n  width: 0px;\n  height: 0.8px;\n  background: ',
                  ';\n\n',
                ]
              )),
            function (_ref2) {
              return _ref2.theme.color.textNeutral;
            }
          ),
          DividerRight = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
            _templateObject4 ||
              (_templateObject4 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                ['\n  ', '\n  background: ', ';\n']
              )),
            Divider,
            function (_ref3) {
              return _ref3.theme.color.greyBackdropRight;
            }
          ),
          DividerLeft = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
            _templateObject5 ||
              (_templateObject5 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                ['\n  ', '\n  background: ', ';\n']
              )),
            Divider,
            function (_ref4) {
              return _ref4.theme.color.greyBackdropLeft;
            }
          );
        try {
          (ProjectSectionTitle.displayName = 'ProjectSectionTitle'),
            (ProjectSectionTitle.__docgenInfo = {
              description: '',
              displayName: 'ProjectSectionTitle',
              props: {},
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/ProjectSectionTitle/ProjectSectionTitle.tsx#ProjectSectionTitle'
              ] = {
                docgenInfo: ProjectSectionTitle.__docgenInfo,
                name: 'ProjectSectionTitle',
                path: 'src/UI/components/atoms/ProjectSectionTitle/ProjectSectionTitle.tsx#ProjectSectionTitle',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/atoms/RowIconTextButton/RowIconTextButton.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          I: function () {
            return RowIconTextButton;
          },
        });
        var objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          RowIconText = __webpack_require__(
            './src/UI/components/layout/RowIconText/RowIconText.tsx'
          ),
          TextButton = __webpack_require__(
            './src/UI/components/text/TextButton/index.ts'
          ),
          IIconSVG = __webpack_require__(
            './src/UI/components/atoms/IIconSVG/index.ts'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['text', 'iconSrc', 'color', 'size'],
          RowIconTextButton = function RowIconTextButton(_ref) {
            var text = _ref.text,
              iconSrc = _ref.iconSrc,
              _ref$color = _ref.color,
              color = void 0 === _ref$color ? 'black' : _ref$color,
              _ref$size = _ref.size,
              size = void 0 === _ref$size ? 'medium' : _ref$size,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded),
              icon = iconSrc
                ? (0, jsx_runtime.jsx)(IIconSVG.$, {
                    color: color,
                    size: 'medium' === size ? 20 : 16,
                    src: iconSrc,
                  })
                : void 0;
            return (0, jsx_runtime.jsx)(
              RowIconText.x,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)(
                  { gap: 'medium' === size ? 4 : 3, icon: icon },
                  props
                ),
                {},
                {
                  children: (0, jsx_runtime.jsx)(TextButton.A, {
                    color: color,
                    isWrapped: !1,
                    size: size,
                    children: text,
                  }),
                }
              )
            );
          };
        try {
          (RowIconTextButton.displayName = 'RowIconTextButton'),
            (RowIconTextButton.__docgenInfo = {
              description: '',
              displayName: 'RowIconTextButton',
              props: {
                text: {
                  defaultValue: null,
                  description: '',
                  name: 'text',
                  required: !1,
                  type: { name: 'string' },
                },
                iconSrc: {
                  defaultValue: null,
                  description: '',
                  name: 'iconSrc',
                  required: !1,
                  type: { name: 'IconSVGType' },
                },
                color: {
                  defaultValue: { value: 'black' },
                  description: '',
                  name: 'color',
                  required: !1,
                  type: { name: 'string' },
                },
                size: {
                  defaultValue: { value: 'medium' },
                  description: '',
                  name: 'size',
                  required: !1,
                  type: {
                    name: 'enum',
                    value: [{ value: '"small"' }, { value: '"medium"' }],
                  },
                },
                icon: {
                  defaultValue: null,
                  description: '',
                  name: 'icon',
                  required: !1,
                  type: {
                    name: 'ReactElement<IIconSVGProps, string | JSXElementConstructor<any>>',
                  },
                },
                gap: {
                  defaultValue: null,
                  description: '',
                  name: 'gap',
                  required: !1,
                  type: { name: 'number' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/atoms/RowIconTextButton/RowIconTextButton.tsx#RowIconTextButton'
              ] = {
                docgenInfo: RowIconTextButton.__docgenInfo,
                name: 'RowIconTextButton',
                path: 'src/UI/components/atoms/RowIconTextButton/RowIconTextButton.tsx#RowIconTextButton',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/atoms/RowIconTextButton/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        I: function () {
          return _RowIconTextButton__WEBPACK_IMPORTED_MODULE_0__.I;
        },
      });
      var _RowIconTextButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/atoms/RowIconTextButton/RowIconTextButton.tsx'
      );
    },
    './src/UI/components/groups/Footer/FooterCopyright/FooterCopyright.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          g: function () {
            return FooterCopyright;
          },
        });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          _templateObject4,
          taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          styled_components_browser_esm =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          TextFooter = __webpack_require__(
            './src/UI/components/text/TextFooter/TextFooter.tsx'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          FooterCopyright = function FooterCopyright(_ref) {
            var props = Object.assign({}, _ref);
            return (0, jsx_runtime.jsx)(Wrapper, {
              children: (0, jsx_runtime.jsxs)(TextWrapper, {
                children: [
                  (0, jsx_runtime.jsx)(
                    FooterCopyright_Date,
                    (0, objectSpread2.Z)(
                      (0, objectSpread2.Z)(
                        { size: 'tiny', isWrapped: !1 },
                        props
                      ),
                      {},
                      { children: '© 2022 ' }
                    )
                  ),
                  (0, jsx_runtime.jsx)(
                    Name,
                    (0, objectSpread2.Z)(
                      (0, objectSpread2.Z)(
                        { size: 'tiny', isWrapped: !1 },
                        props
                      ),
                      {},
                      { children: 'ELSON LIANG' }
                    )
                  ),
                ],
              }),
            });
          },
          Wrapper = styled_components_browser_esm.ZP.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  width: 100%;\n  display: flex;\n  justify-content: center;\n',
              ]))
          ),
          TextWrapper = styled_components_browser_esm.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.Z)([
                '\n  display: flex;\n  overflow: hidden;\n',
              ]))
          ),
          FooterCopyright_Date = (0, styled_components_browser_esm.ZP)(
            TextFooter.M
          )(
            _templateObject3 ||
              (_templateObject3 = (0, taggedTemplateLiteral.Z)([
                '\n  text-align: left;\n',
              ]))
          ),
          Name = (0, styled_components_browser_esm.ZP)(TextFooter.M)(
            _templateObject4 ||
              (_templateObject4 = (0, taggedTemplateLiteral.Z)([
                '\n  flex-basis: 0;\n  flex-grow: 1;\n\n  text-align: left;\n  font-weight: ',
                ';\n',
              ])),
            function (_ref2) {
              return _ref2.theme.font.default.weight.bold;
            }
          );
        try {
          (FooterCopyright.displayName = 'FooterCopyright'),
            (FooterCopyright.__docgenInfo = {
              description: '',
              displayName: 'FooterCopyright',
              props: {
                children: {
                  defaultValue: null,
                  description: 'Text to be used as caption',
                  name: 'children',
                  required: !1,
                  type: { name: 'ReactNode' },
                },
                size: {
                  defaultValue: null,
                  description: '',
                  name: 'size',
                  required: !1,
                  type: { name: 'string' },
                },
                weight: {
                  defaultValue: null,
                  description: '',
                  name: 'weight',
                  required: !1,
                  type: { name: 'string' },
                },
                textAlign: {
                  defaultValue: null,
                  description: '',
                  name: 'textAlign',
                  required: !1,
                  type: { name: 'string' },
                },
                lineHeight: {
                  defaultValue: null,
                  description: '',
                  name: 'lineHeight',
                  required: !1,
                  type: { name: 'string' },
                },
                color: {
                  defaultValue: null,
                  description: '',
                  name: 'color',
                  required: !1,
                  type: { name: 'string' },
                },
                isWrapped: {
                  defaultValue: null,
                  description: '',
                  name: 'isWrapped',
                  required: !1,
                  type: { name: 'boolean' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/Footer/FooterCopyright/FooterCopyright.tsx#FooterCopyright'
              ] = {
                docgenInfo: FooterCopyright.__docgenInfo,
                name: 'FooterCopyright',
                path: 'src/UI/components/groups/Footer/FooterCopyright/FooterCopyright.tsx#FooterCopyright',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/Footer/FooterIconRow/FooterIconRow.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          f: function () {
            return FooterIconRow;
          },
        });
        var objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          Linkedin_esm =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/@styled-icons/fa-brands/Linkedin/Linkedin.esm.js'
            )),
          Github_esm = __webpack_require__(
            './node_modules/@styled-icons/fa-brands/Github/Github.esm.js'
          ),
          Email_esm = __webpack_require__(
            './node_modules/@styled-icons/material-rounded/Email/Email.esm.js'
          ),
          IconLinkExternal = __webpack_require__(
            './src/UI/components/inputs/IconExternalLink/IconLinkExternal.tsx'
          ),
          RowIcon = __webpack_require__(
            './src/UI/components/layout/RowIcon/RowIcon.tsx'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          FooterIconRow = function FooterIconRow(_ref) {
            var props = Object.assign({}, _ref);
            return (0, jsx_runtime.jsxs)(
              RowIcon.M,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({ size: 24 }, props),
                {},
                {
                  children: [
                    (0, jsx_runtime.jsx)(IconLinkExternal.M, {
                      src: Linkedin_esm.n,
                      to: 'https://www.linkedin.com/in/elson-liang/',
                    }),
                    (0, jsx_runtime.jsx)(IconLinkExternal.M, {
                      src: Github_esm.E,
                      to: 'https://github.com/elsonel',
                    }),
                    (0, jsx_runtime.jsx)(IconLinkExternal.M, {
                      src: Email_esm.G,
                      to: 'mailto:elsonliangel@gmail.com',
                    }),
                  ],
                }
              )
            );
          };
        try {
          (FooterIconRow.displayName = 'FooterIconRow'),
            (FooterIconRow.__docgenInfo = {
              description: '',
              displayName: 'FooterIconRow',
              props: {
                size: {
                  defaultValue: null,
                  description: 'Icon size',
                  name: 'size',
                  required: !1,
                  type: { name: 'number' },
                },
                children: {
                  defaultValue: null,
                  description: 'Icons',
                  name: 'children',
                  required: !1,
                  type: {
                    name: 'ReactElement<IIconProps, string | JSXElementConstructor<any>>[]',
                  },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/Footer/FooterIconRow/FooterIconRow.tsx#FooterIconRow'
              ] = {
                docgenInfo: FooterIconRow.__docgenInfo,
                name: 'FooterIconRow',
                path: 'src/UI/components/groups/Footer/FooterIconRow/FooterIconRow.tsx#FooterIconRow',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/Footer/FooterIconRow/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        f: function () {
          return _FooterIconRow__WEBPACK_IMPORTED_MODULE_0__.f;
        },
      });
      var _FooterIconRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/groups/Footer/FooterIconRow/FooterIconRow.tsx'
      );
    },
    './src/UI/components/groups/Footer/FooterLink/FooterLink.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        S: function () {
          return FooterLink;
        },
      });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        _text_TextLink__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./src/UI/components/text/TextLink/index.ts')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        FooterLink = function FooterLink(_ref) {
          var props = Object.assign({}, _ref);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('a', {
            href: '/storybook/index.html',
            target: '_blank',
            rel: 'noreferrer',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              _text_TextLink__WEBPACK_IMPORTED_MODULE_1__.h,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                  { size: 'tiny', isWrapped: !1 },
                  props
                ),
                {},
                { children: 'Designed and built from scratch with React.' }
              )
            ),
          });
        };
      try {
        (FooterLink.displayName = 'FooterLink'),
          (FooterLink.__docgenInfo = {
            description: '',
            displayName: 'FooterLink',
            props: {
              children: {
                defaultValue: null,
                description: 'Text to be used as caption',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string' },
              },
              weight: {
                defaultValue: null,
                description: '',
                name: 'weight',
                required: !1,
                type: { name: 'string' },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: { name: 'string' },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              isWrapped: {
                defaultValue: null,
                description: '',
                name: 'isWrapped',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/Footer/FooterLink/FooterLink.tsx#FooterLink'
            ] = {
              docgenInfo: FooterLink.__docgenInfo,
              name: 'FooterLink',
              path: 'src/UI/components/groups/Footer/FooterLink/FooterLink.tsx#FooterLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/GalleryHeaderBase.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: function () {
            return GalleryHeaderBase;
          },
        });
        var _templateObject,
          _templateObject2,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_4__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['pageTabs', 'sortTabs', 'children'],
          GalleryHeaderBase = function GalleryHeaderBase(_ref) {
            _ref.pageTabs, _ref.sortTabs;
            var children = _ref.children,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              Wrapper,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Content, {
                    children: children,
                  }),
                }
              )
            );
          },
          Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                [
                  '\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0px 20px;\n',
                ]
              ))
          ),
          Content = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                [
                  '\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n\n  overflow-x: clip;\n  overflow-y: visible;\n',
                ]
              ))
          );
        try {
          (GalleryHeaderBase.displayName = 'GalleryHeaderBase'),
            (GalleryHeaderBase.__docgenInfo = {
              description: '',
              displayName: 'GalleryHeaderBase',
              props: {
                pageTabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'pageTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
                sortTabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'sortTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/GalleryHeader/GalleryHeaderBase/GalleryHeaderBase.tsx#GalleryHeaderBase'
              ] = {
                docgenInfo: GalleryHeaderBase.__docgenInfo,
                name: 'GalleryHeaderBase',
                path: 'src/UI/components/groups/GalleryHeader/GalleryHeaderBase/GalleryHeaderBase.tsx#GalleryHeaderBase',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/index.ts':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: function () {
            return _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_0__.Z;
          },
        });
        var _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/GalleryHeaderBase.tsx'
          );
      },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderBrowser/GalleryHeaderBrowser.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          y: function () {
            return GalleryHeaderBrowser;
          },
        });
        var _templateObject,
          _templateObject2,
          taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          styled_components_browser_esm =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          Dropdown = __webpack_require__(
            './src/UI/components/inputs/Dropdown/index.ts'
          ),
          Tabs = __webpack_require__(
            './src/UI/components/groups/Tabs/Tabs.tsx'
          ),
          GalleryHeaderBase = __webpack_require__(
            './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/index.ts'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['pageTabs', 'sortTabs'],
          GalleryHeaderBrowser = function GalleryHeaderBrowser(_ref) {
            var _ref$pageTabs = _ref.pageTabs,
              pageTabs = void 0 === _ref$pageTabs ? [] : _ref$pageTabs,
              _ref$sortTabs = _ref.sortTabs,
              sortTabs = void 0 === _ref$sortTabs ? [] : _ref$sortTabs,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded);
            return (0, jsx_runtime.jsxs)(
              GalleryHeaderBase.Z,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, props),
                {},
                {
                  children: [
                    (0, jsx_runtime.jsx)(Tabs.m, { tabs: pageTabs }),
                    (0, jsx_runtime.jsx)(Gap, {}),
                    (0, jsx_runtime.jsx)(SortSelector, {
                      labelPrefix: 'SORT BY ',
                      tabs: sortTabs,
                    }),
                  ],
                }
              )
            );
          },
          Gap = styled_components_browser_esm.ZP.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  align-self: bottom;\n  flex-shrink: 0;\n  flex-grow: 1;\n\n  box-sizing: border-box;\n  width: 20px;\n\n  border-bottom: 1px solid ',
                ';\n',
              ])),
            function (_ref2) {
              return _ref2.theme.color.outline;
            }
          ),
          SortSelector = (0, styled_components_browser_esm.ZP)(Dropdown.L)(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.Z)([
                '\n  flex-shrink: 0;\n  box-sizing: border-box;\n\n  width: 220px;\n\n  > * {\n    border-bottom: 1px solid ',
                ';\n  }\n',
              ])),
            function (_ref3) {
              return _ref3.theme.color.outline;
            }
          );
        try {
          (GalleryHeaderBrowser.displayName = 'GalleryHeaderBrowser'),
            (GalleryHeaderBrowser.__docgenInfo = {
              description: '',
              displayName: 'GalleryHeaderBrowser',
              props: {
                pageTabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'pageTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
                sortTabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'sortTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/GalleryHeader/GalleryHeaderBrowser/GalleryHeaderBrowser.tsx#GalleryHeaderBrowser'
              ] = {
                docgenInfo: GalleryHeaderBrowser.__docgenInfo,
                name: 'GalleryHeaderBrowser',
                path: 'src/UI/components/groups/GalleryHeader/GalleryHeaderBrowser/GalleryHeaderBrowser.tsx#GalleryHeaderBrowser',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderMobile/GalleryHeaderMobile.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          F: function () {
            return GalleryHeaderMobile;
          },
        });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          _templateObject4,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_6__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _inputs_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/inputs/Dropdown/index.ts'
          ),
          _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/index.ts'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['pageTabs', 'sortTabs'],
          GalleryHeaderMobile = function GalleryHeaderMobile(_ref) {
            var _ref$pageTabs = _ref.pageTabs,
              pageTabs = void 0 === _ref$pageTabs ? [] : _ref$pageTabs,
              _ref$sortTabs = _ref.sortTabs,
              sortTabs = void 0 === _ref$sortTabs ? [] : _ref$sortTabs,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
              _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_2__.Z,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      PageSelector,
                      { size: 'small', tabs: pageTabs }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      Gap,
                      {}
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      SortSelector,
                      { size: 'small', tabs: sortTabs }
                    ),
                  ],
                }
              )
            );
          },
          Gap = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  align-self: bottom;\n  flex-shrink: 0;\n  flex-grow: 1;\n\n  box-sizing: border-box;\n  width: 20px;\n\n  border-bottom: 1px solid ',
                  ';\n',
                ]
              )),
            function (_ref2) {
              return _ref2.theme.color.outline;
            }
          ),
          DropdownStyled = (0,
          styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            _inputs_Dropdown__WEBPACK_IMPORTED_MODULE_1__.L
          )(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  flex-shrink: 0;\n  box-sizing: border-box;\n\n  width: 200px;\n\n  > * {\n    border-left: 0px;\n    border-right: 0px;\n    border-bottom: 1px solid ',
                  ';\n  }\n',
                ]
              )),
            function (_ref3) {
              return _ref3.theme.color.outline;
            }
          ),
          PageSelector = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            DropdownStyled
          )(
            _templateObject3 ||
              (_templateObject3 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  flex-shrink: 1;\n  flex-basis: 160px;\n\n  min-width: 0;\n',
                ]
              ))
          ),
          SortSelector = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            DropdownStyled
          )(
            _templateObject4 ||
              (_templateObject4 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  flex-shrink: 1;\n  flex-basis: 120px;\n\n  min-width: 0;\n',
                ]
              ))
          );
        try {
          (GalleryHeaderMobile.displayName = 'GalleryHeaderMobile'),
            (GalleryHeaderMobile.__docgenInfo = {
              description: '',
              displayName: 'GalleryHeaderMobile',
              props: {
                pageTabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'pageTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
                sortTabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'sortTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/GalleryHeader/GalleryHeaderMobile/GalleryHeaderMobile.tsx#GalleryHeaderMobile'
              ] = {
                docgenInfo: GalleryHeaderMobile.__docgenInfo,
                name: 'GalleryHeaderMobile',
                path: 'src/UI/components/groups/GalleryHeader/GalleryHeaderMobile/GalleryHeaderMobile.tsx#GalleryHeaderMobile',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/GalleryHeader/GalleryHeaderTablet/GalleryHeaderTablet.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          i: function () {
            return GalleryHeaderTablet;
          },
        });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          _templateObject4,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_6__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _inputs_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/inputs/Dropdown/index.ts'
          ),
          _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/index.ts'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['pageTabs', 'sortTabs'],
          GalleryHeaderTablet = function GalleryHeaderTablet(_ref) {
            var _ref$pageTabs = _ref.pageTabs,
              pageTabs = void 0 === _ref$pageTabs ? [] : _ref$pageTabs,
              _ref$sortTabs = _ref.sortTabs,
              sortTabs = void 0 === _ref$sortTabs ? [] : _ref$sortTabs,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
              _GalleryHeaderBase__WEBPACK_IMPORTED_MODULE_2__.Z,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      PageSelector,
                      { size: 'small', tabs: pageTabs }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      Gap,
                      {}
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      SortSelector,
                      { size: 'small', tabs: sortTabs, labelPrefix: 'SORT BY ' }
                    ),
                  ],
                }
              )
            );
          },
          Gap = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  align-self: bottom;\n  flex-shrink: 0;\n  flex-grow: 1;\n\n  box-sizing: border-box;\n  width: 20px;\n\n  border-bottom: 1px solid ',
                  ';\n',
                ]
              )),
            function (_ref2) {
              return _ref2.theme.color.outline;
            }
          ),
          DropdownStyled = (0,
          styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            _inputs_Dropdown__WEBPACK_IMPORTED_MODULE_1__.L
          )(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  flex-shrink: 0;\n  box-sizing: border-box;\n\n  width: 200px;\n\n  > * {\n    border-left: 0px;\n    border-right: 0px;\n    border-bottom: 1px solid ',
                  ';\n  }\n',
                ]
              )),
            function (_ref3) {
              return _ref3.theme.color.outline;
            }
          ),
          PageSelector = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            DropdownStyled
          )(
            _templateObject3 ||
              (_templateObject3 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  flex-shrink: 1;\n  flex-basis: 170px;\n\n  min-width: 0;\n',
                ]
              ))
          ),
          SortSelector = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            DropdownStyled
          )(
            _templateObject4 ||
              (_templateObject4 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  flex-shrink: 1;\n  flex-basis: 180px;\n\n  min-width: 0;\n',
                ]
              ))
          );
        try {
          (GalleryHeaderTablet.displayName = 'GalleryHeaderTablet'),
            (GalleryHeaderTablet.__docgenInfo = {
              description: '',
              displayName: 'GalleryHeaderTablet',
              props: {
                pageTabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'pageTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
                sortTabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'sortTabs',
                  required: !1,
                  type: { name: 'GalleryHeaderTab[]' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/GalleryHeader/GalleryHeaderTablet/GalleryHeaderTablet.tsx#GalleryHeaderTablet'
              ] = {
                docgenInfo: GalleryHeaderTablet.__docgenInfo,
                name: 'GalleryHeaderTablet',
                path: 'src/UI/components/groups/GalleryHeader/GalleryHeaderTablet/GalleryHeaderTablet.tsx#GalleryHeaderTablet',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/Header/HeaderLogo/HeaderLogo.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        O: function () {
          return HeaderLogo;
        },
      });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./src/UI/utility/themes/Theme.ts')),
        _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/atoms/IIconSVG/index.ts'
        ),
        _inputs_LinkFake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/UI/components/inputs/LinkFake/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['onClick'],
        HeaderLogo = function HeaderLogo(_ref) {
          var onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
            _inputs_LinkFake__WEBPACK_IMPORTED_MODULE_3__.X,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                { onClick: onClick },
                props
              ),
              {},
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_2__.$,
                  {
                    src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q
                      .icon.logo,
                    size: 24,
                  }
                ),
              }
            )
          );
        };
      try {
        (HeaderLogo.displayName = 'HeaderLogo'),
          (HeaderLogo.__docgenInfo = {
            description: '',
            displayName: 'HeaderLogo',
            props: {
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/Header/HeaderLogo/HeaderLogo.tsx#HeaderLogo'
            ] = {
              docgenInfo: HeaderLogo.__docgenInfo,
              name: 'HeaderLogo',
              path: 'src/UI/components/groups/Header/HeaderLogo/HeaderLogo.tsx#HeaderLogo',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/groups/Header/HeaderTabsMobile/HeaderTabsMobile.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          h: function () {
            return HeaderTabsMobile;
          },
        });
        var _templateObject,
          _templateObject2,
          _templateObject3,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_7__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _inputs_LinkFake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/inputs/LinkFake/index.ts'
          ),
          _layout_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/UI/components/layout/Modal/index.ts'
          ),
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/UI/components/text/Paragraph/index.ts'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['tabs', 'onTabClick'],
          HeaderTabsMobile = function HeaderTabsMobile(_ref) {
            var _ref$tabs = _ref.tabs,
              tabs = void 0 === _ref$tabs ? [] : _ref$tabs,
              onTabClick = _ref.onTabClick,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
              Wrapper,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Content, {
                    children: tabs.map(function (e, i) {
                      return (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                        _inputs_LinkFake__WEBPACK_IMPORTED_MODULE_1__.X,
                        {
                          onClick: function onClick() {
                            onTabClick && onTabClick(),
                              e.onClick && e.onClick();
                          },
                          href: e.href,
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            Tab,
                            { isWrapped: !1, children: e.label }
                          ),
                        },
                        i
                      );
                    }),
                  }),
                }
              )
            );
          },
          Wrapper = (0, styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(
            _layout_Modal__WEBPACK_IMPORTED_MODULE_2__.u
          )(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                [
                  '\n  box-sizing: border-box;\n  padding: 20px;\n\n  transform: none;\n',
                ]
              ))
          ),
          Content = styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                [
                  '\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  row-gap: 20px;\n\n  > * {\n    max-width: 100%;\n  }\n',
                ]
              ))
          ),
          Tab = (0, styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(
            _text_Paragraph__WEBPACK_IMPORTED_MODULE_3__.n
          )(
            _templateObject3 ||
              (_templateObject3 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                [
                  '\n  font-size: ',
                  ';\n  font-weight: ',
                  ';\n  cursor: pointer;\n  transition: ',
                  ';\n  color: ',
                  ';\n  &:hover {\n    color: ',
                  ';\n  }\n',
                ]
              )),
            function (_ref2) {
              return _ref2.theme.font.default.size.h1;
            },
            function (_ref3) {
              return _ref3.theme.font.default.weight.semiBold;
            },
            function (_ref4) {
              return _ref4.theme.speed.normal;
            },
            function (_ref5) {
              var theme = _ref5.theme;
              return ''.concat(theme.color.text);
            },
            function (_ref6) {
              return _ref6.theme.color.textHovered;
            }
          );
        try {
          (HeaderTabsMobile.displayName = 'HeaderTabsMobile'),
            (HeaderTabsMobile.__docgenInfo = {
              description: '',
              displayName: 'HeaderTabsMobile',
              props: {
                tabs: {
                  defaultValue: { value: '[]' },
                  description: '',
                  name: 'tabs',
                  required: !1,
                  type: { name: 'HeaderTabData[]' },
                },
                onTabClick: {
                  defaultValue: null,
                  description: '',
                  name: 'onTabClick',
                  required: !1,
                  type: { name: '(() => void)' },
                },
                isVisible: {
                  defaultValue: null,
                  description: '',
                  name: 'isVisible',
                  required: !1,
                  type: { name: 'boolean' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/Header/HeaderTabsMobile/HeaderTabsMobile.tsx#HeaderTabsMobile'
              ] = {
                docgenInfo: HeaderTabsMobile.__docgenInfo,
                name: 'HeaderTabsMobile',
                path: 'src/UI/components/groups/Header/HeaderTabsMobile/HeaderTabsMobile.tsx#HeaderTabsMobile',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/Header/HeaderTabs/HeaderTabs.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        a: function () {
          return HeaderTabs;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        ResponsiveProps = __webpack_require__(
          './src/UI/utility/hooks/ResponsiveProps.ts'
        ),
        HeaderTab = __webpack_require__(
          './src/UI/components/inputs/HeaderTab/HeaderTab.tsx'
        ),
        LinkFake = __webpack_require__(
          './src/UI/components/inputs/LinkFake/index.ts'
        ),
        Modal = __webpack_require__(
          './src/UI/components/layout/Modal/index.ts'
        ),
        HeaderTabsMobile = __webpack_require__(
          './src/UI/components/groups/Header/HeaderTabsMobile/HeaderTabsMobile.tsx'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['tabs'],
        HeaderTabs = function HeaderTabs(_ref) {
          var _ref$tabs = _ref.tabs,
            tabs = void 0 === _ref$tabs ? [] : _ref$tabs,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            isMenuOpen = _useState2[0],
            setIsMenuOpen = _useState2[1],
            isDesktop = (0, ResponsiveProps.gY)(600);
          (0, react.useEffect)(
            function () {
              isDesktop && setIsMenuOpen(!1);
            },
            [isDesktop]
          );
          return (0, jsx_runtime.jsxs)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(Background, { isVisible: isMenuOpen }),
                  (0, jsx_runtime.jsx)(Content, {
                    children: isDesktop
                      ? (function renderDesktop() {
                          return tabs.map(function (e, i) {
                            return (0,
                            jsx_runtime.jsx)(LinkFake.X, { onClick: e.onClick, href: e.href, children: (0, jsx_runtime.jsx)(HeaderTab.A, { children: e.label }) }, i);
                          });
                        })()
                      : (function renderMobile() {
                          return (0, jsx_runtime.jsx)(HeaderTab.A, {
                            onClick: function onClick() {
                              return setIsMenuOpen(!isMenuOpen);
                            },
                            children: isMenuOpen ? 'CLOSE' : 'MENU',
                          });
                        })(),
                  }),
                  (0, jsx_runtime.jsx)(ModalMobile, {
                    tabs: tabs,
                    isVisible: isMenuOpen,
                    onTabClick: function onTabClick() {
                      return setIsMenuOpen(!1);
                    },
                  }),
                ],
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  overflow: hidden;\n',
            ]))
        ),
        Background = (0, styled_components_browser_esm.ZP)(Modal.u)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  z-index: 0;\n  height: ',
              'px;\n\n  background: ',
              ';\n  transform: none;\n',
            ])),
          function (_ref2) {
            return _ref2.theme.size.headerHeight;
          },
          function (_ref3) {
            return _ref3.theme.color.background;
          }
        ),
        Content = styled_components_browser_esm.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  z-index: 1;\n  display: flex;\n  gap: 20px;\n',
            ]))
        ),
        ModalMobile = (0, styled_components_browser_esm.ZP)(HeaderTabsMobile.h)(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n\n  top: ',
              'px;\n  height: ',
              ';\n  padding-top: 0px;\n\n  background: ',
              ';\n',
            ])),
          function (_ref4) {
            return _ref4.theme.size.headerHeight;
          },
          function (_ref5) {
            var theme = _ref5.theme;
            return 'calc(100vh - '.concat(theme.size.headerHeight, 'px)');
          },
          function (_ref6) {
            return _ref6.theme.color.background;
          }
        );
      try {
        (HeaderTabs.displayName = 'HeaderTabs'),
          (HeaderTabs.__docgenInfo = {
            description: '',
            displayName: 'HeaderTabs',
            props: {
              tabs: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'tabs',
                required: !1,
                type: { name: 'HeaderTabData[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/Header/HeaderTabs/HeaderTabs.tsx#HeaderTabs'
            ] = {
              docgenInfo: HeaderTabs.__docgenInfo,
              name: 'HeaderTabs',
              path: 'src/UI/components/groups/Header/HeaderTabs/HeaderTabs.tsx#HeaderTabs',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/groups/Project/ProjectLayout/ProjectLayout.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          A: function () {
            return ProjectLayout;
          },
        });
        var taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          toConsumableArray = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
          ),
          slicedToArray = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
          toArray = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toArray.js'
          ),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          react = __webpack_require__('./node_modules/react/index.js'),
          styled_components_browser_esm = __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          ),
          ProjectMenuHorizontal = __webpack_require__(
            './src/UI/components/atoms/ProjectMenuHorizontal/ProjectMenuHorizontal.tsx'
          );
        var Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          ResponsiveCSS = __webpack_require__(
            './src/UI/utility/styles/ResponsiveCSS.ts'
          );
        var _templateObject,
          _templateObject2,
          _templateObject3,
          _templateObject4,
          _templateObject5,
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = [
            'children',
            'isLandingVisible',
            'onLandingClick',
            'onLandingClose',
          ],
          HEADER_HEIGHT = Theme.Q.size.headerHeight,
          TOP_OFFSET = HEADER_HEIGHT + 40 - 4;
        function renderMenu(
          allSections,
          allRefs,
          selectedIndex,
          scrollProgress
        ) {
          return (0, jsx_runtime.jsx)(ProjectMenuHorizontal.p, {
            progress: snapProgress(
              scrollProgress,
              1 / (allSections.length + 1)
            ),
            tabs: allSections.map(function (e, i) {
              return {
                label: e.props.title ? e.props.title : '',
                isActive: i === selectedIndex,
                onClick: function onClick() {
                  return scrollToRef(allRefs[i]);
                },
              };
            }),
          });
        }
        function snapProgress(progress, factor) {
          var remainder = progress % factor;
          return remainder < 0.02
            ? progress - remainder
            : remainder + 0.02 > factor
            ? snapProgress(progress + 0.02, factor)
            : progress;
        }
        function getLocalProgress(selectedRef) {
          if (!selectedRef || !selectedRef.current) return 0;
          var refCoords = selectedRef.current.getBoundingClientRect();
          return (function clamp(num, min, max) {
            return Math.max(min, Math.min(num, max));
          })(-(refCoords.top - TOP_OFFSET) / refCoords.height, 0, 1);
        }
        var scrollToRef = function scrollToRef(ref) {
            if (ref && ref.current) {
              var scrollY =
                ref.current.getBoundingClientRect().top +
                window.pageYOffset -
                TOP_OFFSET;
              window.scrollTo({ top: scrollY, behavior: 'smooth' });
            }
          },
          ProjectLayout = function ProjectLayout(_ref) {
            var children = _ref.children,
              _ref$isLandingVisible = _ref.isLandingVisible,
              isLandingVisible =
                void 0 !== _ref$isLandingVisible && _ref$isLandingVisible,
              onLandingClick = _ref.onLandingClick,
              onLandingClose = _ref.onLandingClose,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded),
              _children = (0, toArray.Z)(children),
              landing = _children[0],
              sections = _children.slice(1),
              _useState = (0, react.useState)(-1),
              _useState2 = (0, slicedToArray.Z)(_useState, 2),
              scrollProgress = _useState2[0],
              setScrollProgress = _useState2[1],
              _useState3 = (0, react.useState)(-1),
              _useState4 = (0, slicedToArray.Z)(_useState3, 2),
              selectedIndex = _useState4[0],
              setSelectedIndex = _useState4[1],
              scrollTop = (function useOnWindowScroll(callback) {
                var _useState = (0, react.useState)(window.pageYOffset),
                  _useState2 = (0, slicedToArray.Z)(_useState, 2),
                  pageOffset = _useState2[0],
                  setPageOffset = _useState2[1];
                return (
                  (0, react.useEffect)(function () {
                    var handleScroll = function handleScroll(e) {
                      callback && callback(window.pageYOffset),
                        setPageOffset(window.pageYOffset);
                    };
                    return (
                      window.addEventListener('scroll', handleScroll),
                      function () {
                        window.removeEventListener('scroll', handleScroll);
                      }
                    );
                  }, []),
                  pageOffset
                );
              })(),
              allRefs = sections.map(function () {
                return (0, react.useRef)(null);
              }),
              allIsOnScreen = allRefs.map(function (ref) {
                return (function useOnScreen(ref) {
                  var triggers =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    options = arguments.length > 2 ? arguments[2] : void 0,
                    _useState = (0, react.useState)(!1),
                    _useState2 = (0, slicedToArray.Z)(_useState, 2),
                    isOnScreen = _useState2[0],
                    setIsOnScreen = _useState2[1],
                    observerRef = (0, react.useRef)();
                  return (
                    (0, react.useEffect)(function () {
                      observerRef.current = new IntersectionObserver(function (
                        _ref
                      ) {
                        var entry = (0, slicedToArray.Z)(_ref, 1)[0];
                        return setIsOnScreen(entry.isIntersecting);
                      },
                      options);
                    }, []),
                    (0, react.useEffect)(function () {
                      if (observerRef.current && ref.current)
                        return (
                          observerRef.current.observe(ref.current),
                          function () {
                            observerRef.current.disconnect();
                          }
                        );
                    }, [ref].concat((0, toConsumableArray.Z)(triggers))),
                    isOnScreen
                  );
                })(ref, [], {
                  root: document,
                  rootMargin: '-'.concat(TOP_OFFSET + 1, 'px 0px 0px 0px'),
                });
              });
            return (
              (0, react.useEffect)(
                function () {
                  if (-1 !== scrollProgress) {
                    var localProgress = getLocalProgress(
                        allRefs[selectedIndex]
                      ),
                      remappedProgress = (function remapLocalProgress(
                        allRefs,
                        selectedIndex,
                        localProgress
                      ) {
                        if (
                          !allRefs[selectedIndex] ||
                          !allRefs[selectedIndex].current
                        )
                          return 0;
                        var segmentLength = 1 / (allRefs.length + 1);
                        return (
                          segmentLength * (selectedIndex + 1) +
                          localProgress * segmentLength
                        );
                      })(allRefs, selectedIndex, localProgress);
                    Math.abs(remappedProgress - scrollProgress) > 0.02 &&
                      setScrollProgress(remappedProgress);
                  } else setScrollProgress(1 / (sections.length + 1));
                },
                [scrollTop]
              ),
              (0, react.useEffect)(function () {
                setSelectedIndex(
                  allIsOnScreen.findIndex(function (e, i) {
                    return allIsOnScreen[i] && !allIsOnScreen[i - 1];
                  })
                );
              }, (0, toConsumableArray.Z)(allIsOnScreen)),
              (0, jsx_runtime.jsxs)(
                'div',
                (0, objectSpread2.Z)(
                  (0, objectSpread2.Z)({}, props),
                  {},
                  {
                    children: [
                      (0, jsx_runtime.jsxs)(Content, {
                        children: [
                          (0, jsx_runtime.jsxs)(Header, {
                            $isLandingVisible: isLandingVisible,
                            children: [
                              (0, jsx_runtime.jsx)(HeaderTopGap, {}),
                              renderMenu(
                                sections,
                                allRefs,
                                selectedIndex,
                                scrollProgress
                              ),
                            ],
                          }),
                          (0, jsx_runtime.jsx)(SectionWrapper, {
                            $isLandingVisible: isLandingVisible,
                            children: sections.map(function (e, i) {
                              return (0,
                              jsx_runtime.jsx)('div', { ref: allRefs[i], children: e }, i);
                            }),
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(LandingWrapper, {
                        $isLandingVisible: isLandingVisible,
                        onClick: onLandingClick,
                        onTransitionEnd: isLandingVisible
                          ? void 0
                          : onLandingClose,
                        children: landing,
                      }),
                    ],
                  }
                )
              )
            );
          },
          LandingWrapper = styled_components_browser_esm.ZP.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  z-index: 2;\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n\n  opacity: ',
                ';\n  pointer-events: ',
                ';\n\n  transition-duration: ',
                ';\n  transition-property: opacity, transform;\n',
              ])),
            function (_ref2) {
              return _ref2.$isLandingVisible ? 1 : 0;
            },
            function (_ref3) {
              return _ref3.$isLandingVisible ? 'auto' : 'none';
            },
            function (_ref4) {
              return _ref4.theme.speed.normal;
            }
          ),
          Content = styled_components_browser_esm.ZP.div(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.Z)([
                '\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n',
              ]))
          ),
          HeaderTopGap = styled_components_browser_esm.ZP.div(
            _templateObject3 ||
              (_templateObject3 = (0, taggedTemplateLiteral.Z)([
                '\n  width: 100%;\n  height: ',
                'px;\n\n  background: ',
                ';\n',
              ])),
            function (_ref5) {
              return _ref5.theme.size.header - 4;
            },
            function (_ref6) {
              return _ref6.theme.color.background;
            }
          ),
          Header = styled_components_browser_esm.ZP.div(
            _templateObject4 ||
              (_templateObject4 = (0, taggedTemplateLiteral.Z)([
                '\n  z-index: 1;\n  position: sticky;\n  width: 100%;\n  top: 0px;\n\n  transform: ',
                ';\n  opacity: ',
                ';\n\n  transition-duration: ',
                ';\n  transition-delay: ',
                ';\n  transition-property: opacity, transform;\n\n  ',
                '\n',
              ])),
            function (_ref7) {
              return _ref7.$isLandingVisible
                ? 'translateY(-120px)'
                : 'translateY(0px)';
            },
            function (_ref8) {
              return _ref8.$isLandingVisible ? 0 : 1;
            },
            function (_ref9) {
              return _ref9.theme.speed.fast;
            },
            function (_ref10) {
              var $isLandingVisible = _ref10.$isLandingVisible,
                theme = _ref10.theme;
              return $isLandingVisible ? 0 : theme.speed.fast;
            },
            (0, ResponsiveCSS.o)(
              800,
              ' \n      position: static; \n      > * {\n        &:last-child {\n          display: none;\n        }\n      } \n    \n    '
            )
          ),
          SectionWrapper = styled_components_browser_esm.ZP.div(
            _templateObject5 ||
              (_templateObject5 = (0, taggedTemplateLiteral.Z)([
                '\n  z-index: 0;\n  position: relative;\n\n  transform: ',
                ';\n  width: min(100%, 800px);\n  opacity: ',
                ';\n\n  transition-duration: ',
                ';\n  transition-delay: ',
                ';\n  transition-property: opacity, transform;\n',
              ])),
            function (_ref11) {
              return _ref11.$isLandingVisible
                ? 'translateY(25vh)'
                : 'translateY(0px)';
            },
            function (_ref12) {
              return _ref12.$isLandingVisible ? 0 : 1;
            },
            function (_ref13) {
              return _ref13.theme.speed.normal;
            },
            function (_ref14) {
              var $isLandingVisible = _ref14.$isLandingVisible,
                theme = _ref14.theme;
              return $isLandingVisible ? 0 : theme.speed.normal;
            }
          );
        try {
          (ProjectLayout.displayName = 'ProjectLayout'),
            (ProjectLayout.__docgenInfo = {
              description: '',
              displayName: 'ProjectLayout',
              props: {
                isLandingVisible: {
                  defaultValue: { value: 'false' },
                  description: '',
                  name: 'isLandingVisible',
                  required: !1,
                  type: { name: 'boolean' },
                },
                onLandingClick: {
                  defaultValue: null,
                  description: '',
                  name: 'onLandingClick',
                  required: !1,
                  type: { name: '(() => void)' },
                },
                onLandingClose: {
                  defaultValue: null,
                  description: '',
                  name: 'onLandingClose',
                  required: !1,
                  type: { name: '(() => void)' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/Project/ProjectLayout/ProjectLayout.tsx#ProjectLayout'
              ] = {
                docgenInfo: ProjectLayout.__docgenInfo,
                name: 'ProjectLayout',
                path: 'src/UI/components/groups/Project/ProjectLayout/ProjectLayout.tsx#ProjectLayout',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/Project/ProjectSection/ProjectSection.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          I: function () {
            return ProjectSection;
          },
        });
        var _templateObject,
          taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          styled_components_browser_esm =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          ProjectSectionTitle = __webpack_require__(
            './src/UI/components/atoms/ProjectSectionTitle/ProjectSectionTitle.tsx'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['title', 'children'],
          ProjectSection = function ProjectSection(_ref) {
            var title = _ref.title,
              children = _ref.children,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded);
            return (0, jsx_runtime.jsxs)(
              Wrapper,
              (0, objectSpread2.Z)(
                (0, objectSpread2.Z)({}, props),
                {},
                {
                  children: [
                    (0, jsx_runtime.jsx)(ProjectSectionTitle.M, {
                      children: title,
                    }),
                    children,
                  ],
                }
              )
            );
          },
          Wrapper = styled_components_browser_esm.ZP.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px;\n  padding-bottom: 60px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  > * {\n    width: 100%;\n  }\n',
              ]))
          );
        try {
          (ProjectSection.displayName = 'ProjectSection'),
            (ProjectSection.__docgenInfo = {
              description: '',
              displayName: 'ProjectSection',
              props: {
                title: {
                  defaultValue: null,
                  description: '',
                  name: 'title',
                  required: !1,
                  type: { name: 'string' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/groups/Project/ProjectSection/ProjectSection.tsx#ProjectSection'
              ] = {
                docgenInfo: ProjectSection.__docgenInfo,
                name: 'ProjectSection',
                path: 'src/UI/components/groups/Project/ProjectSection/ProjectSection.tsx#ProjectSection',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/groups/Project/ProjectSection/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        I: function () {
          return _ProjectSection__WEBPACK_IMPORTED_MODULE_0__.I;
        },
      });
      var _ProjectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/groups/Project/ProjectSection/ProjectSection.tsx'
      );
    },
    './src/UI/components/groups/Tabs/Tabs.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        m: function () {
          return Tabs;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        ProgressLine = __webpack_require__(
          './src/UI/components/atoms/ProgressLine/index.ts'
        ),
        Tab = __webpack_require__('./src/UI/components/inputs/Tab/Tab.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['tabs'],
        Tabs = function Tabs(_ref) {
          var _ref$tabs = _ref.tabs,
            tabs = void 0 === _ref$tabs ? [] : _ref$tabs,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded),
            childRefs = tabs.map(function () {
              return (0, react.useRef)(null);
            }),
            _useState = (0, react.useState)(0),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            lineStart = _useState2[0],
            setLineStart = _useState2[1],
            _useState3 = (0, react.useState)(0),
            _useState4 = (0, slicedToArray.Z)(_useState3, 2),
            lineWidth = _useState4[0],
            setLineWidth = _useState4[1];
          return (0, jsx_runtime.jsxs)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {
                  ref: function callback(ref) {
                    if (ref) {
                      var selectedButtonIndex = tabs.findIndex(function (e) {
                          return e.isSelected;
                        }),
                        selectedRef = childRefs[selectedButtonIndex];
                      if (selectedRef && selectedRef.current) {
                        var buttonCoords =
                            selectedRef.current.getBoundingClientRect(),
                          parentCoords = ref.getBoundingClientRect();
                        setLineStart(buttonCoords.left - parentCoords.left),
                          setLineWidth(buttonCoords.width);
                      }
                    }
                  },
                },
                props
              ),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(TabRow, {
                    children: tabs.map(function (e, i) {
                      return (0,
                      jsx_runtime.jsx)('div', { ref: childRefs[i], children: (0, jsx_runtime.jsx)(Tab.O, { isSelected: e.isSelected, onClick: e.onClick, children: e.label }) }, i);
                    }),
                  }),
                  (0, jsx_runtime.jsx)(ProgressLineStyled, {
                    lineStart: lineStart,
                    lineWidth: lineWidth,
                  }),
                ],
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  position: relative;\n  display: inline-block;\n',
            ]))
        ),
        ProgressLineStyled = (0, styled_components_browser_esm.ZP)(
          ProgressLine.C
        )(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  position: absolute;\n\n  width: 100%;\n  left: 0px;\n  bottom: 0px;\n\n  pointer-events: none;\n',
            ]))
        ),
        TabRow = styled_components_browser_esm.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
            ]))
        );
      try {
        (Tabs.displayName = 'Tabs'),
          (Tabs.__docgenInfo = {
            description: '',
            displayName: 'Tabs',
            props: {
              tabs: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'tabs',
                required: !1,
                type: { name: 'TabData[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/groups/Tabs/Tabs.tsx#Tabs'
            ] = {
              docgenInfo: Tabs.__docgenInfo,
              name: 'Tabs',
              path: 'src/UI/components/groups/Tabs/Tabs.tsx#Tabs',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/ButtonModalClose/ButtonModalClose.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          C: function () {
            return ButtonModalClose;
          },
        });
        var _templateObject,
          _templateObject2,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_7__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/atoms/IIconSVG/index.ts'
          ),
          _ButtonModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/UI/components/inputs/ButtonModal/index.ts'
          ),
          _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('./src/UI/utility/themes/Theme.ts'),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['onClick'],
          ButtonModalClose = function ButtonModalClose(_ref) {
            var onClick = _ref.onClick,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
              Button,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                  { onClick: onClick },
                  props
                ),
                {},
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Icon, {
                    size: 20,
                    src: _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_3__.Q
                      .icon.modalClose,
                  }),
                }
              )
            );
          },
          Button = (0, styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(
            _ButtonModal__WEBPACK_IMPORTED_MODULE_2__.e
          )(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                [
                  '\n  width: 32px;\n  height: 32px;\n\n  &:hover {\n    > * {\n      color: ',
                  ';\n    }\n  }\n',
                ]
              )),
            function (_ref2) {
              var theme = _ref2.theme;
              return ''.concat(theme.color.background);
            }
          ),
          Icon = (0, styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(
            _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_1__.$
          )(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                ['\n  color: ', ';\n']
              )),
            function (_ref3) {
              var theme = _ref3.theme;
              return ''.concat(theme.color.outline);
            }
          );
        try {
          (ButtonModalClose.displayName = 'ButtonModalClose'),
            (ButtonModalClose.__docgenInfo = {
              description: '',
              displayName: 'ButtonModalClose',
              props: {
                onClick: {
                  defaultValue: null,
                  description: '',
                  name: 'onClick',
                  required: !1,
                  type: { name: '(() => void)' },
                },
                isDisabled: {
                  defaultValue: null,
                  description: '',
                  name: 'isDisabled',
                  required: !1,
                  type: { name: 'boolean' },
                },
                border: {
                  defaultValue: null,
                  description: '',
                  name: 'border',
                  required: !1,
                  type: { name: 'string' },
                },
                borderHovered: {
                  defaultValue: null,
                  description: '',
                  name: 'borderHovered',
                  required: !1,
                  type: { name: 'string' },
                },
                color: {
                  defaultValue: null,
                  description: '',
                  name: 'color',
                  required: !1,
                  type: { name: 'string' },
                },
                colorHovered: {
                  defaultValue: null,
                  description: '',
                  name: 'colorHovered',
                  required: !1,
                  type: { name: 'string' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/inputs/ButtonModalClose/ButtonModalClose.tsx#ButtonModalClose'
              ] = {
                docgenInfo: ButtonModalClose.__docgenInfo,
                name: 'ButtonModalClose',
                path: 'src/UI/components/inputs/ButtonModalClose/ButtonModalClose.tsx#ButtonModalClose',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/inputs/ButtonModalNext/ButtonModalNext.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        W: function () {
          return ButtonModalNext;
        },
      });
      var _templateObject,
        _templateObject2,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_7__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/atoms/IIconSVG/index.ts'
        ),
        _ButtonModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/UI/components/inputs/ButtonModal/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['direction'],
        ButtonModalNext = function ButtonModalNext(_ref) {
          var direction = _ref.direction,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
            Button,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                {},
                props
              ),
              {},
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Icon, {
                  size: 20,
                  src:
                    'LEFT' === direction
                      ? _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q
                          .icon.modalLeft
                      : _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q
                          .icon.modalRight,
                }),
              }
            )
          );
        },
        Button = (0, styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(
          _ButtonModal__WEBPACK_IMPORTED_MODULE_3__.e
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
              [
                '\n  width: 96px;\n  height: 48px;\n\n  &:hover {\n    > * {\n      color: ',
                ';\n    }\n  }\n',
              ]
            )),
          function (_ref2) {
            var theme = _ref2.theme;
            return ''.concat(theme.color.background);
          }
        ),
        Icon = (0, styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP)(
          _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_2__.$
        )(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
              ['\n  color: ', ';\n']
            )),
          function (_ref3) {
            var theme = _ref3.theme;
            return ''.concat(theme.color.outline);
          }
        );
      try {
        (ButtonModalNext.displayName = 'ButtonModalNext'),
          (ButtonModalNext.__docgenInfo = {
            description: '',
            displayName: 'ButtonModalNext',
            props: {
              direction: {
                defaultValue: null,
                description: '',
                name: 'direction',
                required: !0,
                type: {
                  name: 'enum',
                  value: [{ value: '"RIGHT"' }, { value: '"LEFT"' }],
                },
              },
              isDisabled: {
                defaultValue: null,
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: { name: 'string' },
              },
              borderHovered: {
                defaultValue: null,
                description: '',
                name: 'borderHovered',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              colorHovered: {
                defaultValue: null,
                description: '',
                name: 'colorHovered',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/ButtonModalNext/ButtonModalNext.tsx#ButtonModalNext'
            ] = {
              docgenInfo: ButtonModalNext.__docgenInfo,
              name: 'ButtonModalNext',
              path: 'src/UI/components/inputs/ButtonModalNext/ButtonModalNext.tsx#ButtonModalNext',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/ButtonModal/ButtonModal.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        e: function () {
          return ButtonModal;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        _ButtonReverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/inputs/ButtonReverse/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        ButtonModal = function ButtonModal(_ref) {
          var props = Object.assign({}, _ref);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            Button,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              {
                border:
                  _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                    .outline,
                borderHovered:
                  _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                    .text,
                color:
                  _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                    .background,
                colorHovered:
                  _utility_themes_Theme__WEBPACK_IMPORTED_MODULE_1__.Q.color
                    .text,
              },
              props
            )
          );
        },
        Button = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
          _ButtonReverse__WEBPACK_IMPORTED_MODULE_2__.$
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  //border-width: 2px;\n']
            ))
        );
      try {
        (ButtonModal.displayName = 'ButtonModal'),
          (ButtonModal.__docgenInfo = {
            description: '',
            displayName: 'ButtonModal',
            props: {
              isDisabled: {
                defaultValue: null,
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: { name: 'string' },
              },
              borderHovered: {
                defaultValue: null,
                description: '',
                name: 'borderHovered',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              colorHovered: {
                defaultValue: null,
                description: '',
                name: 'colorHovered',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/ButtonModal/ButtonModal.tsx#ButtonModal'
            ] = {
              docgenInfo: ButtonModal.__docgenInfo,
              name: 'ButtonModal',
              path: 'src/UI/components/inputs/ButtonModal/ButtonModal.tsx#ButtonModal',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/ButtonModal/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        e: function () {
          return _ButtonModal__WEBPACK_IMPORTED_MODULE_0__.e;
        },
      });
      var _ButtonModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/inputs/ButtonModal/ButtonModal.tsx'
      );
    },
    './src/UI/components/inputs/ButtonReverse/ButtonReverse.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        $: function () {
          return ButtonReverse;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/inputs/Button/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['isDisabled'],
        ButtonReverse = function ButtonReverse(_ref) {
          var _ref$isDisabled = _ref.isDisabled,
            isDisabled = void 0 !== _ref$isDisabled && _ref$isDisabled,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _useState,
              2
            ),
            isClicked = _useState2[0],
            setIsClicked = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            ButtonLayoutStyled,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              {
                onMouseDown: function onMouseDown() {
                  return setIsClicked(!0);
                },
                onMouseUp: function onMouseUp() {
                  return setIsClicked(!1);
                },
                $isClicked: isClicked,
                isDisabled: isDisabled,
              },
              props
            )
          );
        },
        ButtonDisabled = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  opacity: 0.4;\n']
            ))
        ),
        ButtonEnabled = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  opacity: ', ';\n']
            )),
          function (_ref2) {
            return _ref2.$isClicked ? 0.9 : 1;
          }
        ),
        ButtonLayoutStyled = (0,
        styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _Button__WEBPACK_IMPORTED_MODULE_1__.z
        )(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  ', '\n']
            )),
          function (_ref3) {
            return _ref3.isDisabled ? ButtonDisabled : ButtonEnabled;
          }
        );
      try {
        (ButtonReverse.displayName = 'ButtonReverse'),
          (ButtonReverse.__docgenInfo = {
            description: '',
            displayName: 'ButtonReverse',
            props: {
              isDisabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: { name: 'string' },
              },
              borderHovered: {
                defaultValue: null,
                description: '',
                name: 'borderHovered',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              colorHovered: {
                defaultValue: null,
                description: '',
                name: 'colorHovered',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/ButtonReverse/ButtonReverse.tsx#ButtonReverse'
            ] = {
              docgenInfo: ButtonReverse.__docgenInfo,
              name: 'ButtonReverse',
              path: 'src/UI/components/inputs/ButtonReverse/ButtonReverse.tsx#ButtonReverse',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/ButtonReverse/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        $: function () {
          return _ButtonReverse__WEBPACK_IMPORTED_MODULE_0__.$;
        },
      });
      var _ButtonReverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/inputs/ButtonReverse/ButtonReverse.tsx'
      );
    },
    './src/UI/components/inputs/Button/Button.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return Button;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = [
          'children',
          'isDisabled',
          'border',
          'borderHovered',
          'color',
          'colorHovered',
          'onClick',
        ],
        Button = function Button(_ref) {
          var children = _ref.children,
            _ref$isDisabled = _ref.isDisabled,
            isDisabled = void 0 !== _ref$isDisabled && _ref$isDisabled,
            border = _ref.border,
            borderHovered = _ref.borderHovered,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? '#F37676' : _ref$color,
            colorHovered = _ref.colorHovered,
            onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _useState,
              2
            ),
            isHovered = _useState2[0],
            setIsHovered = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            ButtonStyled,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {
                  onMouseEnter: function onMouseEnter() {
                    return setIsHovered(!0);
                  },
                  onMouseLeave: function onMouseLeave() {
                    return setIsHovered(!1);
                  },
                  onMouseDown: function onMouseDown() {
                    return setIsHovered(!1);
                  },
                  onMouseUp: function onMouseUp() {
                    return setIsHovered(!0);
                  },
                  $isHovered: isHovered,
                  $border: border || color,
                  $borderHovered: borderHovered || border || color,
                  $color: color,
                  $colorHovered: colorHovered || color,
                  $isDisabled: isDisabled,
                  onClick: onClick,
                },
                props
              ),
              {},
              { children: children }
            )
          );
        },
        ButtonDisabled = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n',
              ]
            ))
        ),
        ButtonEnabled = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  opacity: ', ';\n  cursor: pointer;\n']
            )),
          function (_ref2) {
            return _ref2.$isHovered ? 0.9 : 1;
          }
        ),
        ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.button(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  flex-shrink: 0;\n  box-sizing: border-box;\n  padding: 0px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: 1.5px solid\n    ',
                ';\n  background-color: ',
                ';\n  transition: ',
                ';\n  user-select: none;\n\n  ',
                '\n\n  > * {\n    transition: ',
                ';\n  }\n',
              ]
            )),
          function (_ref3) {
            var $isHovered = _ref3.$isHovered,
              $border = _ref3.$border,
              $borderHovered = _ref3.$borderHovered;
            return $isHovered ? $borderHovered : $border;
          },
          function (_ref4) {
            var $isHovered = _ref4.$isHovered,
              $color = _ref4.$color,
              $colorHovered = _ref4.$colorHovered;
            return $isHovered ? $colorHovered : $color;
          },
          function (_ref5) {
            return _ref5.theme.speed.normal;
          },
          function (_ref6) {
            return _ref6.$isDisabled ? ButtonDisabled : ButtonEnabled;
          },
          function (_ref7) {
            return _ref7.theme.speed.normal;
          }
        );
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              isDisabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              border: {
                defaultValue: null,
                description: '',
                name: 'border',
                required: !1,
                type: { name: 'string' },
              },
              borderHovered: {
                defaultValue: null,
                description: '',
                name: 'borderHovered',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#F37676' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              colorHovered: {
                defaultValue: null,
                description: '',
                name: 'colorHovered',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/Button/Button.tsx#Button'
            ] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/UI/components/inputs/Button/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/Button/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return _Button__WEBPACK_IMPORTED_MODULE_0__.z;
        },
      });
      var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/inputs/Button/Button.tsx'
      );
    },
    './src/UI/components/inputs/DropdownHeader/DropdownHeader.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        A: function () {
          return DropdownHeader;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _text_TextButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/TextButton/index.ts'
        ),
        _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/atoms/IIconSVG/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['size', 'subtitle', 'title', 'icon', 'onClick'],
        DropdownHeader = function DropdownHeader(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'medium' : _ref$size,
            subtitle = _ref.subtitle,
            title = _ref.title,
            icon = _ref.icon,
            onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                { $size: size, onClick: onClick },
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    TextPrefix,
                    { isWrapped: !1, $size: size, children: subtitle }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    TextSelected,
                    { isWrapped: !1, $size: size, children: title }
                  ),
                  icon &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      Icon,
                      { $size: size, src: icon }
                    ),
                ],
              }
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  box-sizing: border-box;\n  width: 100%;\n  height: ',
                ';\n  padding: ',
                ';\n\n  display: flex;\n  align-items: center;\n\n  cursor: pointer;\n  user-select: none;\n  background: ',
                ';\n',
              ]
            )),
          function (_ref2) {
            return 'medium' === _ref2.$size ? '40px' : '32px';
          },
          function (_ref3) {
            return 'medium' === _ref3.$size ? '10px' : '8px';
          },
          function (_ref4) {
            return _ref4.theme.color.background;
          }
        ),
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_TextButton__WEBPACK_IMPORTED_MODULE_1__.A
        )(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  font-size: ', ';\n']
            )),
          function (_ref5) {
            var theme = _ref5.theme;
            return 'medium' === _ref5.$size
              ? theme.font.default.size.medium
              : theme.font.default.size.small;
          }
        ),
        TextPrefix = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          Text
        )(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  flex-shrink: 1;\n  flex-grow: 0;\n\n  color: ', ';\n']
            )),
          function (_ref6) {
            return _ref6.theme.color.textNeutral;
          }
        ),
        TextSelected = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          Text
        )(
          _templateObject4 ||
            (_templateObject4 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  flex-shrink: 0;\n  flex-grow: 1;\n  flex-basis: 0;\n\n  font-weight: ',
                ';\n',
              ]
            )),
          function (_ref7) {
            return _ref7.theme.font.default.weight.bold;
          }
        ),
        Icon = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_2__.$
        )(
          _templateObject5 ||
            (_templateObject5 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  flex-shrink: 0;\n\n  margin-left: 10px;\n  width: ',
                ';\n  height: ',
                ';\n\n  color: ',
                ';\n',
              ]
            )),
          function (_ref8) {
            return 'medium' === _ref8.$size ? '16px' : '12px';
          },
          function (_ref9) {
            return 'medium' === _ref9.$size ? '16px' : '12px';
          },
          function (_ref10) {
            return _ref10.theme.color.textNeutral;
          }
        );
      try {
        (DropdownHeader.displayName = 'DropdownHeader'),
          (DropdownHeader.__docgenInfo = {
            description: '',
            displayName: 'DropdownHeader',
            props: {
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"small"' }, { value: '"medium"' }],
                },
              },
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: {
                  name: 'string | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>',
                },
              },
              subtitle: {
                defaultValue: null,
                description: '',
                name: 'subtitle',
                required: !1,
                type: { name: 'string' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/DropdownHeader/DropdownHeader.tsx#DropdownHeader'
            ] = {
              docgenInfo: DropdownHeader.__docgenInfo,
              name: 'DropdownHeader',
              path: 'src/UI/components/inputs/DropdownHeader/DropdownHeader.tsx#DropdownHeader',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/DropdownItem/DropdownItem.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        h: function () {
          return DropdownItem;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        _text_TextButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/UI/components/text/TextButton/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['size', 'isSelected', 'children', 'onClick'],
        DropdownItem = function DropdownItem(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'medium' : _ref$size,
            _ref$isSelected = _ref.isSelected,
            isSelected = void 0 !== _ref$isSelected && _ref$isSelected,
            _ref$children = _ref.children,
            children = void 0 === _ref$children ? '' : _ref$children,
            onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                { $size: size, $isSelected: isSelected, onClick: onClick },
                props
              ),
              {},
              {
                children:
                  'medium' === size
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        TextMedium,
                        { $isSelected: isSelected, children: children }
                      )
                    : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                        TextSmall,
                        { $isSelected: isSelected, children: children }
                      ),
              }
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  box-sizing: border-box;\n  width: 100%;\n  height: ',
                ';\n  padding: ',
                ';\n\n  display: flex;\n  align-items: center;\n\n  cursor: pointer;\n  user-select: none;\n  transition: ',
                ';\n  background: ',
                ';\n\n  &:hover {\n    background: ',
                ';\n\n    > * {\n      font-weight: ',
                ';\n    }\n  }\n',
              ]
            )),
          function (_ref2) {
            return 'medium' === _ref2.$size ? '36px' : '28px';
          },
          function (_ref3) {
            return 'medium' === _ref3.$size ? '10px' : '8px';
          },
          function (_ref4) {
            var theme = _ref4.theme;
            return ''.concat(theme.speed.normal);
          },
          function (_ref5) {
            var theme = _ref5.theme;
            return _ref5.$isSelected
              ? theme.color.backgroundHighlight
              : theme.color.background;
          },
          function (_ref6) {
            return _ref6.theme.color.backgroundHighlight;
          },
          function (_ref7) {
            var theme = _ref7.theme;
            return 'medium' === _ref7.$size
              ? theme.font.default.weight.bold
              : theme.font.default.weight.semiBold;
          }
        ),
        TextSmall =
          ((0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
          )(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                [
                  '\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n',
                ]
              ))
          ),
          (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
            _text_TextButton__WEBPACK_IMPORTED_MODULE_2__.A
          )(
            _templateObject3 ||
              (_templateObject3 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                ['\n  font-size: ', ';\n  font-weight: ', ';\n']
              )),
            function (_ref8) {
              return _ref8.theme.font.default.size.tiny;
            },
            function (_ref9) {
              var theme = _ref9.theme;
              return _ref9.$isSelected
                ? theme.font.default.weight.semiBold
                : theme.font.default.weight.regular;
            }
          )),
        TextMedium = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_TextButton__WEBPACK_IMPORTED_MODULE_2__.A
        )(
          _templateObject4 ||
            (_templateObject4 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  font-size: ', ';\n  font-weight: ', ';\n']
            )),
          function (_ref10) {
            return _ref10.theme.font.default.size.small;
          },
          function (_ref11) {
            var theme = _ref11.theme;
            return _ref11.$isSelected
              ? theme.font.default.weight.bold
              : theme.font.default.weight.regular;
          }
        );
      try {
        (DropdownItem.displayName = 'DropdownItem'),
          (DropdownItem.__docgenInfo = {
            description: '',
            displayName: 'DropdownItem',
            props: {
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"small"' }, { value: '"medium"' }],
                },
              },
              isSelected: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isSelected',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/DropdownItem/DropdownItem.tsx#DropdownItem'
            ] = {
              docgenInfo: DropdownItem.__docgenInfo,
              name: 'DropdownItem',
              path: 'src/UI/components/inputs/DropdownItem/DropdownItem.tsx#DropdownItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/Dropdown/Dropdown.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        L: function () {
          return Dropdown;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        slicedToArray = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        ChevronUpDown_esm = __webpack_require__(
          './node_modules/@styled-icons/fluentui-system-regular/ChevronUpDown/ChevronUpDown.esm.js'
        ),
        DropdownHeader = __webpack_require__(
          './src/UI/components/inputs/DropdownHeader/DropdownHeader.tsx'
        ),
        DropdownItem = __webpack_require__(
          './src/UI/components/inputs/DropdownItem/DropdownItem.tsx'
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['size', 'labelPrefix', 'label', 'tabs'],
        Dropdown = function Dropdown(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'medium' : _ref$size,
            prefix = _ref.labelPrefix,
            label = _ref.label,
            _ref$tabs = _ref.tabs,
            tabs = void 0 === _ref$tabs ? [] : _ref$tabs,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded),
            _useState = (0, react.useState)(!1),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            isOpen = _useState2[0],
            setIsOpen = _useState2[1],
            selectedTab = tabs.find(function (e) {
              return e.isSelected;
            });
          return (0, jsx_runtime.jsxs)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({}, props),
              {},
              {
                children: [
                  (0, jsx_runtime.jsx)(HeaderStyled, {
                    onMouseLeave: function onMouseLeave() {
                      return setIsOpen(!1);
                    },
                    onMouseEnter: function onMouseEnter() {
                      return isOpen && setIsOpen(!0);
                    },
                    onClick: function onClick() {
                      return setIsOpen(!isOpen);
                    },
                    $isOpen: isOpen,
                    size: size,
                    icon: ChevronUpDown_esm.j,
                    subtitle: prefix,
                    title:
                      void 0 !== label
                        ? label
                        : selectedTab && selectedTab.label,
                  }),
                  (0, jsx_runtime.jsx)(Content, {
                    $isVisible: isOpen,
                    onMouseEnter: function onMouseEnter() {
                      return isOpen && setIsOpen(!0);
                    },
                    onMouseLeave: function onMouseLeave() {
                      return setIsOpen(!1);
                    },
                    children: tabs.map(function (e, i) {
                      return (0, jsx_runtime.jsx)(
                        DropdownItem.h,
                        {
                          size: size,
                          isSelected: e.isSelected && e.isSelected,
                          onClick: function onClick() {
                            setIsOpen(!1), e.onClick && e.onClick();
                          },
                          children: e.label,
                        },
                        i
                      );
                    }),
                  }),
                ],
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  position: relative;\n  box-sizing: border-box;\n  width: 400px;\n\n  user-select: none;\n',
            ]))
        ),
        HeaderStyled = (0, styled_components_browser_esm.ZP)(DropdownHeader.A)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  box-sizing: border-box;\n  width: 100%;\n\n  border: 1px solid\n    ',
              ';\n  transition: ',
              ';\n',
            ])),
          function (_ref2) {
            var theme = _ref2.theme;
            return _ref2.$isOpen ? theme.color.outline : 'transparent';
          },
          function (_ref3) {
            var theme = _ref3.theme;
            return ''.concat(theme.speed.normal);
          }
        ),
        Content = styled_components_browser_esm.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  z-index: ',
              ';\n  box-sizing: border-box;\n\n  position: absolute;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n\n  border: 1px solid ',
              ';\n  border-top: 0px;\n\n  opacity: ',
              ';\n  pointer-events: ',
              ';\n  transition: ',
              ';\n',
            ])),
          function (_ref4) {
            return _ref4.theme.layer.header;
          },
          function (_ref5) {
            return _ref5.theme.color.outline;
          },
          function (_ref6) {
            return _ref6.$isVisible ? 1 : 0;
          },
          function (_ref7) {
            return _ref7.$isVisible ? 'auto' : 'none';
          },
          function (_ref8) {
            var theme = _ref8.theme;
            return ''.concat(theme.speed.normal);
          }
        );
      try {
        (Dropdown.displayName = 'Dropdown'),
          (Dropdown.__docgenInfo = {
            description: '',
            displayName: 'Dropdown',
            props: {
              size: {
                defaultValue: { value: 'medium' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"small"' }, { value: '"medium"' }],
                },
              },
              labelPrefix: {
                defaultValue: null,
                description: '',
                name: 'labelPrefix',
                required: !1,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'string' },
              },
              tabs: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'tabs',
                required: !1,
                type: { name: 'DropdownItemData[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/Dropdown/Dropdown.tsx#Dropdown'
            ] = {
              docgenInfo: Dropdown.__docgenInfo,
              name: 'Dropdown',
              path: 'src/UI/components/inputs/Dropdown/Dropdown.tsx#Dropdown',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/Dropdown/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        L: function () {
          return _Dropdown__WEBPACK_IMPORTED_MODULE_0__.L;
        },
      });
      var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/inputs/Dropdown/Dropdown.tsx'
      );
    },
    './src/UI/components/inputs/HeaderTab/HeaderTab.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        A: function () {
          return HeaderTab;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'onClick'],
        HeaderTab = function HeaderTab(_ref) {
          var children = _ref.children,
            onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _useState,
              2
            ),
            isHovered = _useState2[0],
            setIsHovered = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                {
                  $isHovered: isHovered,
                  onMouseEnter: function onMouseEnter() {
                    return setIsHovered(!0);
                  },
                  onMouseLeave: function onMouseLeave() {
                    return setIsHovered(!1);
                  },
                  onClick: onClick,
                },
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    Background,
                    { $isHovered: isHovered }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    Text,
                    (0,
                    C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                      (0,
                      C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                        { isWrapped: !1 },
                        props
                      ),
                      {},
                      { children: children }
                    )
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    Foreground,
                    { $isHovered: isHovered }
                  ),
                ],
              }
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  display: inline-flex;\n  position: relative;\n\n  cursor: pointer;\n',
              ]
            ))
        ),
        Background = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  z-index: 0;\n\n  position: absolute;\n  top: 0px;\n  left: ',
                ';\n  height: 100%;\n  width: ',
                ';\n\n  transition: ',
                ';\n  background-color: ',
                ';\n  pointer-events: none;\n',
              ]
            )),
          function (_ref2) {
            return _ref2.$isHovered ? '0%' : '100%';
          },
          function (_ref3) {
            return _ref3.$isHovered ? '100%' : '0%';
          },
          function (_ref4) {
            return _ref4.theme.speed.normal;
          },
          function (_ref5) {
            return _ref5.theme.color.background;
          }
        ),
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
        )(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  z-index: 1;\n\n  padding: 0px 4px;\n\n  user-select: none;\n  pointer-events: none;\n  font-weight: ',
                ';\n  font-size: ',
                ';\n  transition: ',
                ';\n  color: ',
                ';\n',
              ]
            )),
          function (_ref6) {
            return _ref6.theme.font.default.weight.bold;
          },
          function (_ref7) {
            return _ref7.theme.font.default.size.small;
          },
          function (_ref8) {
            return _ref8.theme.speed.normal;
          },
          function (_ref9) {
            return _ref9.theme.color.text;
          }
        ),
        Foreground = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          Background
        )(
          _templateObject4 ||
            (_templateObject4 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  z-index: 2;\n\n  background-color: ',
                ';\n  mix-blend-mode: difference;\n',
              ]
            )),
          function (_ref10) {
            return _ref10.theme.color.backgroundHighlight;
          }
        );
      (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
        _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
      )(
        _templateObject5 ||
          (_templateObject5 = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
            [
              '\n  //color: #fff;\n  //background-color: transparent;\n  background: white;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  mix-blend-mode: difference;\n',
            ]
          ))
      );
      try {
        (HeaderTab.displayName = 'HeaderTab'),
          (HeaderTab.__docgenInfo = {
            description: '',
            displayName: 'HeaderTab',
            props: {
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/HeaderTab/HeaderTab.tsx#HeaderTab'
            ] = {
              docgenInfo: HeaderTab.__docgenInfo,
              name: 'HeaderTab',
              path: 'src/UI/components/inputs/HeaderTab/HeaderTab.tsx#HeaderTab',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/IconExternalLink/IconLinkExternal.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          M: function () {
            return IconLinkExternal;
          },
        });
        var _templateObject,
          _templateObject2,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_5__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/atoms/IIconSVG/index.ts'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['to', 'size'],
          IconLinkExternal = function IconLinkExternal(_ref) {
            var to = _ref.to,
              _ref$size = _ref.size,
              size = void 0 === _ref$size ? 32 : _ref$size,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              Link,
              {
                $size: size,
                href: to,
                target: '_blank',
                rel: 'noreferrer',
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  Icon,
                  (0,
                  C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    {},
                    props
                  )
                ),
              }
            );
          },
          Link = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.a(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                [
                  '\n  display: inline-flex;\n\n  width: ',
                  ';\n  height: ',
                  ';\n\n  cursor: pointer;\n',
                ]
              )),
            function (_ref2) {
              var $size = _ref2.$size;
              return 'number' == typeof $size ? ''.concat($size, 'px') : $size;
            },
            function (_ref3) {
              var $size = _ref3.$size;
              return 'number' == typeof $size ? ''.concat($size, 'px') : $size;
            }
          ),
          Icon = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
            _atoms_IIconSVG__WEBPACK_IMPORTED_MODULE_1__.$
          )(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                [
                  '\n  width: inherit;\n  height: inherit;\n\n  color: ',
                  ';\n  &:hover {\n    color: ',
                  ';\n  }\n\n  transition: ',
                  ';\n',
                ]
              )),
            function (_ref4) {
              return _ref4.theme.color.textNeutral;
            },
            function (_ref5) {
              return _ref5.theme.color.textHovered;
            },
            function (_ref6) {
              return _ref6.theme.speed.normal;
            }
          );
        try {
          (IconLinkExternal.displayName = 'IconLinkExternal'),
            (IconLinkExternal.__docgenInfo = {
              description: '',
              displayName: 'IconLinkExternal',
              props: {
                to: {
                  defaultValue: null,
                  description: '',
                  name: 'to',
                  required: !0,
                  type: { name: 'string' },
                },
                size: {
                  defaultValue: { value: '32' },
                  description: '',
                  name: 'size',
                  required: !1,
                  type: { name: 'string | number' },
                },
                color: {
                  defaultValue: null,
                  description: '',
                  name: 'color',
                  required: !1,
                  type: { name: 'string' },
                },
                src: {
                  defaultValue: null,
                  description: '',
                  name: 'src',
                  required: !0,
                  type: {
                    name: 'string | ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>',
                  },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/inputs/IconExternalLink/IconLinkExternal.tsx#IconLinkExternal'
              ] = {
                docgenInfo: IconLinkExternal.__docgenInfo,
                name: 'IconLinkExternal',
                path: 'src/UI/components/inputs/IconExternalLink/IconLinkExternal.tsx#IconLinkExternal',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/inputs/LinkExternalFactText/LinkExternalFactText.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          o: function () {
            return LinkExternalFactText;
          },
        });
        var _templateObject,
          _templateObject2,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
            ),
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            ),
          styled_components__WEBPACK_IMPORTED_MODULE_5__ =
            (__webpack_require__('./node_modules/react/index.js'),
            __webpack_require__(
              './node_modules/styled-components/dist/styled-components.browser.esm.js'
            )),
          _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/UI/components/text/Paragraph/index.ts'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['link', 'children'],
          LinkExternalFactText = function LinkExternalFactText(_ref) {
            var link = _ref.link,
              children = _ref.children,
              props = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                _ref,
                _excluded
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              Text,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
                    href: link,
                    target: '_blank',
                    rel: 'noreferrer',
                    children: children,
                  }),
                }
              )
            );
          },
          Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
            _text_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
          )(
            _templateObject ||
              (_templateObject = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                [
                  '\n  font-weight: ',
                  ';\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  transition: ',
                  ';\n  &:hover {\n    color: ',
                  ';\n  }\n',
                ]
              )),
            function (_ref2) {
              return _ref2.theme.font.default.weight.bold;
            },
            function (_ref3) {
              return _ref3.theme.speed.normal;
            },
            function (_ref4) {
              return _ref4.theme.color.textHovered;
            }
          ),
          Link = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.a(
            _templateObject2 ||
              (_templateObject2 = (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                ['\n  color: inherit;\n']
              ))
          );
        try {
          (LinkExternalFactText.displayName = 'LinkExternalFactText'),
            (LinkExternalFactText.__docgenInfo = {
              description: '',
              displayName: 'LinkExternalFactText',
              props: {
                link: {
                  defaultValue: null,
                  description: '',
                  name: 'link',
                  required: !0,
                  type: { name: 'string' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/inputs/LinkExternalFactText/LinkExternalFactText.tsx#LinkExternalFactText'
              ] = {
                docgenInfo: LinkExternalFactText.__docgenInfo,
                name: 'LinkExternalFactText',
                path: 'src/UI/components/inputs/LinkExternalFactText/LinkExternalFactText.tsx#LinkExternalFactText',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/inputs/LinkExternalFactText/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        o: function () {
          return _LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__.o;
        },
      });
      var _LinkExternalFactText__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          './src/UI/components/inputs/LinkExternalFactText/LinkExternalFactText.tsx'
        );
    },
    './src/UI/components/inputs/LinkFake/LinkFake.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        X: function () {
          return LinkFake;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'onClick'],
        LinkFake = function LinkFake(_ref) {
          var children = _ref.children,
            _onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            Link,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                {
                  onClick: function onClick(e) {
                    e.preventDefault(), _onClick && _onClick();
                  },
                },
                props
              ),
              {},
              { children: children }
            )
          );
        },
        Link = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.a(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              ['\n  display: flex;\n  text-decoration: none;\n']
            ))
        );
      try {
        (LinkFake.displayName = 'LinkFake'),
          (LinkFake.__docgenInfo = {
            description: '',
            displayName: 'LinkFake',
            props: {
              children: {
                defaultValue: null,
                description: 'Element to be linked',
                name: 'children',
                required: !0,
                type: { name: 'ReactNode' },
              },
              onClick: {
                defaultValue: null,
                description: 'When link is clicked',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/LinkFake/LinkFake.tsx#LinkFake'
            ] = {
              docgenInfo: LinkFake.__docgenInfo,
              name: 'LinkFake',
              path: 'src/UI/components/inputs/LinkFake/LinkFake.tsx#LinkFake',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/LinkFake/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        X: function () {
          return _LinkFake__WEBPACK_IMPORTED_MODULE_0__.X;
        },
      });
      var _LinkFake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/inputs/LinkFake/LinkFake.tsx'
      );
    },
    './src/UI/components/inputs/ScrollHandler/ScrollHandler.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Y: function () {
          return ScrollHandler;
        },
      });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        _utility_hooks_useOnWindowScrollDelta__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './src/UI/utility/hooks/useOnWindowScrollDelta.ts'
          )),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = [
          'onUp',
          'onDown',
          'onScrollWindow',
          'scrollTriggers',
          'children',
        ],
        upKeys = { ArrowUp: !0, PageUp: !0, Home: !0 },
        downKeys = { ArrowDown: !0, PageDown: !0, End: !0, ' ': !0 },
        ScrollHandler = function ScrollHandler(_ref) {
          var onUp = _ref.onUp,
            onDown = _ref.onDown,
            onScrollWindow = _ref.onScrollWindow,
            _ref$scrollTriggers = _ref.scrollTriggers,
            scrollTriggers =
              void 0 === _ref$scrollTriggers ? [] : _ref$scrollTriggers,
            children = _ref.children,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          (0,
          _utility_hooks_useOnWindowScrollDelta__WEBPACK_IMPORTED_MODULE_1__.Z)(
            onScrollWindow,
            scrollTriggers
          );
          var startY = 0;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            'div',
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {
                  onWheel: function handleWheel(e) {
                    e.deltaY > 0
                      ? onDown && onDown(e)
                      : e.deltaY < 0 && onUp && onUp(e);
                  },
                  onTouchStart: function onTouchStart(e) {
                    startY = e.changedTouches[0].screenY;
                  },
                  onTouchEnd: function onTouchEnd(e) {
                    var endY = e.changedTouches[0].screenY;
                    startY > endY + 5
                      ? onDown && onDown(e)
                      : startY < endY - 5 && onUp && onUp(e);
                  },
                  onKeyDown: function handleKeyDown(e) {
                    downKeys[e.key] || downKeys[e.code]
                      ? onDown && onDown(e)
                      : (upKeys[e.key] || upKeys[e.code]) && onUp && onUp(e);
                  },
                },
                props
              ),
              {},
              { children: children }
            )
          );
        };
      try {
        (ScrollHandler.displayName = 'ScrollHandler'),
          (ScrollHandler.__docgenInfo = {
            description: '',
            displayName: 'ScrollHandler',
            props: {
              onUp: {
                defaultValue: null,
                description: '',
                name: 'onUp',
                required: !1,
                type: { name: '((e: SyntheticEvent<Element, Event>) => void)' },
              },
              onDown: {
                defaultValue: null,
                description: '',
                name: 'onDown',
                required: !1,
                type: { name: '((e: SyntheticEvent<Element, Event>) => void)' },
              },
              onScrollWindow: {
                defaultValue: null,
                description: '',
                name: 'onScrollWindow',
                required: !1,
                type: { name: '((e: number) => void)' },
              },
              scrollTriggers: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'scrollTriggers',
                required: !1,
                type: { name: 'any[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/ScrollHandler/ScrollHandler.tsx#ScrollHandler'
            ] = {
              docgenInfo: ScrollHandler.__docgenInfo,
              name: 'ScrollHandler',
              path: 'src/UI/components/inputs/ScrollHandler/ScrollHandler.tsx#ScrollHandler',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/inputs/Tab/Tab.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        O: function () {
          return Tab;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _text_TextButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/TextButton/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'isSelected', 'onClick'],
        Tab = function Tab(_ref) {
          var _ref$children = _ref.children,
            children = void 0 === _ref$children ? '' : _ref$children,
            _ref$isSelected = _ref.isSelected,
            isSelected = void 0 !== _ref$isSelected && _ref$isSelected,
            onClick = _ref.onClick,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _useState,
              2
            ),
            isHovered = _useState2[0],
            setIsHovered = _useState2[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                {
                  onClick: onClick,
                  onMouseEnter: function onMouseEnter() {
                    return setIsHovered(!0);
                  },
                  onMouseLeave: function onMouseLeave() {
                    return setIsHovered(!1);
                  },
                },
                props
              ),
              {},
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                  TabWrapper,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        TextBolded,
                        { $isHovered: !0, $isSelected: !0, children: children }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                        Text,
                        {
                          $isHovered: isHovered,
                          $isSelected: isSelected,
                          children: children,
                        }
                      ),
                    ],
                  }
                ),
              }
            )
          );
        },
        TextSelected = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  font-weight: ', ';\n  color: ', ';\n']
            )),
          function (_ref2) {
            return _ref2.theme.font.default.weight.bold;
          },
          function (_ref3) {
            return _ref3.theme.color.text;
          }
        ),
        TextNeutral = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.iv)(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  font-weight: ', ';\n  color: ', ';\n']
            )),
          function (_ref4) {
            return _ref4.theme.font.default.weight.regular;
          },
          function (_ref5) {
            return _ref5.theme.color.textNeutral;
          }
        ),
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          _text_TextButton__WEBPACK_IMPORTED_MODULE_1__.A
        )(
          _templateObject3 ||
            (_templateObject3 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  flex-basis: auto;\n  position: absolute;\n\n  user-select: none;\n  transition: ',
                ';\n\n  ',
                ';\n',
              ]
            )),
          function (_ref6) {
            var theme = _ref6.theme;
            return ''.concat(theme.speed.normal);
          },
          function (_ref7) {
            var $isSelected = _ref7.$isSelected,
              $isHovered = _ref7.$isHovered;
            return $isSelected || $isHovered ? TextSelected : TextNeutral;
          }
        ),
        TextBolded = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(
          Text
        )(
          _templateObject4 ||
            (_templateObject4 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  position: static;\n  opacity: 0;\n  pointer-events: none;\n',
              ]
            ))
        ),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject5 ||
            (_templateObject5 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  display: inline-block;\n\n  box-sizing: border-box;\n  height: 40px;\n  padding: 0px 20px;\n\n  cursor: pointer;\n',
              ]
            ))
        ),
        TabWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject6 ||
            (_templateObject6 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  position: relative;\n\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
              ]
            ))
        );
      try {
        (Tab.displayName = 'Tab'),
          (Tab.__docgenInfo = {
            description: '',
            displayName: 'Tab',
            props: {
              isSelected: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isSelected',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(() => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/inputs/Tab/Tab.tsx#Tab'
            ] = {
              docgenInfo: Tab.__docgenInfo,
              name: 'Tab',
              path: 'src/UI/components/inputs/Tab/Tab.tsx#Tab',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/layout/GridRow/GridRow.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        J: function () {
          return GridRow;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/layout/Grid/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children'],
        GridRow = function GridRow(_ref) {
          var children = _ref.children,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            GridStyled,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                props
              ),
              {},
              { children: children }
            )
          );
        },
        GridStyled = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
          _Grid__WEBPACK_IMPORTED_MODULE_1__.r
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  width: 100%;\n\n  flex-wrap: nowrap;\n  overflow-x: auto;\n',
              ]
            ))
        );
      try {
        (GridRow.displayName = 'GridRow'),
          (GridRow.__docgenInfo = {
            description: '',
            displayName: 'GridRow',
            props: {
              breakpoints: {
                defaultValue: null,
                description: '',
                name: 'breakpoints',
                required: !1,
                type: { name: 'GridBreakpoint[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/layout/GridRow/GridRow.tsx#GridRow'
            ] = {
              docgenInfo: GridRow.__docgenInfo,
              name: 'GridRow',
              path: 'src/UI/components/layout/GridRow/GridRow.tsx#GridRow',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/layout/Grid/Grid.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        r: function () {
          return Grid;
        },
      });
      var _templateObject,
        _templateObject2,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _utility_styles_ResponsiveCSS__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/UI/utility/styles/ResponsiveCSS.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'breakpoints'],
        DEFAULT_BREAKPOINTS = [
          { minWidth: 0, columnCount: 1 },
          { minWidth: 800, columnCount: 2 },
          { minWidth: 1e3, columnCount: 3 },
          { minWidth: 1200, columnCount: 4 },
        ],
        Grid = function Grid(_ref) {
          var _ref$children = _ref.children,
            children = void 0 === _ref$children ? [] : _ref$children,
            _ref$breakpoints = _ref.breakpoints,
            breakpoints =
              void 0 === _ref$breakpoints
                ? DEFAULT_BREAKPOINTS
                : _ref$breakpoints,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            ),
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              _useState,
              2
            ),
            visible = _useState2[0],
            setVisible = _useState2[1];
          return (
            !Array.isArray(children) && (children = [children]),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
              setTimeout(function () {
                return setVisible(!0);
              }, 100);
            }, []),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              Wrapper,
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                (0,
                C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                  {},
                  props
                ),
                {},
                {
                  children: children.map(function (component, index) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ItemWrapper, { $breakpoints: breakpoints, $visible: visible, $index: index, children: component }, index);
                  }),
                }
              )
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  width: 100%;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n',
              ]
            ))
        ),
        ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  flex-shrink: 0;\n\n  opacity: ',
                ';\n  pointer-events: ',
                ';\n  transition-duration: ',
                ';\n  transition-timing-function: ease-out;\n  transition-property: opacity;\n  transition-delay: ',
                'ms;\n\n  ',
                ';\n',
              ]
            )),
          function (_ref2) {
            return _ref2.$visible ? 1 : 0;
          },
          function (_ref3) {
            return _ref3.$visible ? 'auto' : 'none';
          },
          function (_ref4) {
            return _ref4.theme.speed.slow;
          },
          function (_ref5) {
            return 60 * _ref5.$index;
          },
          function (_ref6) {
            return _ref6.$breakpoints
              .map(function (e) {
                return (0,
                _utility_styles_ResponsiveCSS__WEBPACK_IMPORTED_MODULE_1__.G)(
                  e.minWidth,
                  (function calculateWidth(gapPixels, columnCount) {
                    return '\n    width: calc((100% - ('
                      .concat(gapPixels, 'px * ')
                      .concat(columnCount - 1, ')) / ')
                      .concat(columnCount, ');\n  ');
                  })(20, e.columnCount)
                );
              })
              .join('\r\n');
          }
        );
      try {
        (Grid.displayName = 'Grid'),
          (Grid.__docgenInfo = {
            description: '',
            displayName: 'Grid',
            props: {
              breakpoints: {
                defaultValue: {
                  value:
                    '[\n  {\n    minWidth: 0,\n    columnCount: 1,\n  },\n  {\n    minWidth: 800,\n    columnCount: 2,\n  },\n  {\n    minWidth: 1000,\n    columnCount: 3,\n  },\n  {\n    minWidth: 1200,\n    columnCount: 4,\n  },\n]',
                },
                description: '',
                name: 'breakpoints',
                required: !1,
                type: { name: 'GridBreakpoint[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/layout/Grid/Grid.tsx#Grid'
            ] = {
              docgenInfo: Grid.__docgenInfo,
              name: 'Grid',
              path: 'src/UI/components/layout/Grid/Grid.tsx#Grid',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/layout/Grid/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        r: function () {
          return _Grid__WEBPACK_IMPORTED_MODULE_0__.r;
        },
      });
      var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/layout/Grid/Grid.tsx'
      );
    },
    './src/UI/components/layout/Modal/Modal.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        u: function () {
          return Modal;
        },
      });
      var _templateObject,
        _templateObject2,
        Modal_templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        objectWithoutProperties = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        Theme = __webpack_require__('./src/UI/utility/themes/Theme.ts'),
        GlobalScrollHidden = (0, styled_components_browser_esm.vJ)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  body {\n    overflow: hidden;\n  }\n',
            ]))
        ),
        jsx_runtime =
          ((0, styled_components_browser_esm.vJ)(
            _templateObject2 ||
              (_templateObject2 = (0, taggedTemplateLiteral.Z)([
                '\n  html, body {\n    background-color: ',
                ';\n  }\n',
              ])),
            Theme.Q.color.background
          ),
          __webpack_require__('./node_modules/react/jsx-runtime.js')),
        _excluded = ['isVisible', 'children'],
        Modal = function Modal(_ref) {
          var _ref$isVisible = _ref.isVisible,
            isVisible = void 0 === _ref$isVisible || _ref$isVisible,
            children = _ref.children,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            Wrapper,
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)({ $isVisible: isVisible }, props),
              {},
              {
                children: [
                  isVisible && (0, jsx_runtime.jsx)(GlobalScrollHidden, {}),
                  children,
                ],
              }
            )
          );
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          Modal_templateObject ||
            (Modal_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  z-index: ',
              ';\n  position: fixed;\n\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n\n  transform: ',
              ';\n  background: lightblue;\n  pointer-events: ',
              ';\n  opacity: ',
              ';\n  transition: ',
              ';\n  transition-property: opacity, transform;\n  overflow: hidden;\n',
            ])),
          function (_ref2) {
            return _ref2.theme.layer.modal;
          },
          function (_ref3) {
            return _ref3.$isVisible ? 'scale(1)' : 'scale(1.05)';
          },
          function (_ref4) {
            return _ref4.$isVisible ? 'auto' : 'none';
          },
          function (_ref5) {
            return _ref5.$isVisible ? 1 : 0;
          },
          function (_ref6) {
            var theme = _ref6.theme;
            return ''.concat(theme.speed.normal);
          }
        );
      try {
        (Modal.displayName = 'Modal'),
          (Modal.__docgenInfo = {
            description: '',
            displayName: 'Modal',
            props: {
              isVisible: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isVisible',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/layout/Modal/Modal.tsx#Modal'
            ] = {
              docgenInfo: Modal.__docgenInfo,
              name: 'Modal',
              path: 'src/UI/components/layout/Modal/Modal.tsx#Modal',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/layout/Modal/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        u: function () {
          return _Modal__WEBPACK_IMPORTED_MODULE_0__.u;
        },
      });
      var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/layout/Modal/Modal.tsx'
      );
    },
    './src/UI/components/layout/RowIconText/RowIconText.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        x: function () {
          return RowIconText;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'icon', 'gap'],
        RowIconText = function RowIconText(_ref) {
          var children = _ref.children,
            icon = _ref.icon,
            _ref$gap = _ref.gap,
            gap = void 0 === _ref$gap ? 0 : _ref$gap,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            Row,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                { $gap: gap },
                props
              ),
              {},
              { children: [icon && icon, children && children] }
            )
          );
        },
        Row = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              [
                '\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  gap: ',
                'px;\n',
              ]
            )),
          function (_ref2) {
            return _ref2.$gap;
          }
        );
      try {
        (RowIconText.displayName = 'RowIconText'),
          (RowIconText.__docgenInfo = {
            description: '',
            displayName: 'RowIconText',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !1,
                type: {
                  name: 'ReactElement<IIconSVGProps, string | JSXElementConstructor<any>>',
                },
              },
              gap: {
                defaultValue: { value: '0' },
                description: '',
                name: 'gap',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/layout/RowIconText/RowIconText.tsx#RowIconText'
            ] = {
              docgenInfo: RowIconText.__docgenInfo,
              name: 'RowIconText',
              path: 'src/UI/components/layout/RowIconText/RowIconText.tsx#RowIconText',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/layout/RowIcon/RowIcon.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        M: function () {
          return RowIcon;
        },
      });
      var _templateObject,
        _templateObject2,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['size', 'children'],
        RowIcon = function RowIcon(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? 32 : _ref$size,
            _ref$children = _ref.children,
            children = void 0 === _ref$children ? [] : _ref$children,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            Row,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                { $gapSize: size / 2 },
                props
              ),
              {},
              {
                children: children.map(function (e, i) {
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconWrapper, { $size: size, children: e }, i);
                }),
              }
            )
          );
        },
        Row = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              ['\n  display: inline-flex;\n  gap: ', 'px;\n']
            )),
          function (_ref2) {
            return _ref2.$gapSize;
          }
        ),
        IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              [
                '\n  flex-shrink: 0;\n\n  width: ',
                'px;\n  height: ',
                'px;\n\n  > * {\n    width: inherit;\n    height: inherit;\n  }\n',
              ]
            )),
          function (_ref3) {
            return _ref3.$size;
          },
          function (_ref4) {
            return _ref4.$size;
          }
        );
      try {
        (RowIcon.displayName = 'RowIcon'),
          (RowIcon.__docgenInfo = {
            description: '',
            displayName: 'RowIcon',
            props: {
              size: {
                defaultValue: { value: '32' },
                description: 'Icon size',
                name: 'size',
                required: !1,
                type: { name: 'number' },
              },
              children: {
                defaultValue: { value: '[]' },
                description: 'Icons',
                name: 'children',
                required: !1,
                type: {
                  name: 'ReactElement<IIconProps, string | JSXElementConstructor<any>>[]',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/layout/RowIcon/RowIcon.tsx#RowIcon'
            ] = {
              docgenInfo: RowIcon.__docgenInfo,
              name: 'RowIcon',
              path: 'src/UI/components/layout/RowIcon/RowIcon.tsx#RowIcon',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/layout/StickyEndsContainer/StickyEndsContainer.tsx':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Y: function () {
            return StickyEndsContainer;
          },
        });
        var taggedTemplateLiteral = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
          objectSpread2 = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
          slicedToArray = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
          objectWithoutProperties = __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
          react = __webpack_require__('./node_modules/react/index.js'),
          styled_components_browser_esm = __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          );
        var _templateObject,
          useOnWindowScrollDelta = __webpack_require__(
            './src/UI/utility/hooks/useOnWindowScrollDelta.ts'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/react/jsx-runtime.js'
          ),
          _excluded = ['topMargin', 'bottomMargin', 'children'],
          StickyEndsContainer = function StickyEndsContainer(_ref) {
            var _ref$topMargin = _ref.topMargin,
              topMargin = void 0 === _ref$topMargin ? 0 : _ref$topMargin,
              _ref$bottomMargin = _ref.bottomMargin,
              bottomMargin =
                void 0 === _ref$bottomMargin ? 0 : _ref$bottomMargin,
              children = _ref.children,
              props = (0, objectWithoutProperties.Z)(_ref, _excluded),
              ref = (0, react.useRef)(null),
              _useState = (0, react.useState)(topMargin),
              _useState2 = (0, slicedToArray.Z)(_useState, 2),
              offset = _useState2[0],
              setOffset = _useState2[1],
              scrollDelta = (0, useOnWindowScrollDelta.Z)(),
              _useOnWindowResizeDel = (function useOnWindowResizeDelta(
                callback
              ) {
                var _useState = (0, react.useState)(window.innerWidth),
                  _useState2 = (0, slicedToArray.Z)(_useState, 2),
                  oldX = _useState2[0],
                  setOldX = _useState2[1],
                  _useState3 = (0, react.useState)(window.innerHeight),
                  _useState4 = (0, slicedToArray.Z)(_useState3, 2),
                  oldY = _useState4[0],
                  setOldY = _useState4[1],
                  _useState5 = (0, react.useState)(0),
                  _useState6 = (0, slicedToArray.Z)(_useState5, 2),
                  deltaX = _useState6[0],
                  setDeltaX = _useState6[1],
                  _useState7 = (0, react.useState)(0),
                  _useState8 = (0, slicedToArray.Z)(_useState7, 2),
                  deltaY = _useState8[0],
                  setDeltaY = _useState8[1];
                return (
                  (0, react.useLayoutEffect)(
                    function () {
                      function updateSize() {
                        var newX = window.innerWidth,
                          newY = window.innerHeight,
                          deltaX = oldX - newX,
                          deltaY = oldY - newY;
                        (0 === deltaX && 0 === deltaY) ||
                          (callback && callback([deltaX, deltaY]),
                          setDeltaX(deltaX),
                          setDeltaY(deltaY),
                          setOldX(newX),
                          setOldY(newY));
                      }
                      return (
                        window.addEventListener('resize', updateSize),
                        updateSize(),
                        function () {
                          return window.removeEventListener(
                            'resize',
                            updateSize
                          );
                        }
                      );
                    },
                    [deltaX, deltaY]
                  ),
                  [deltaX, deltaY]
                );
              })(),
              _useOnWindowResizeDel2 = (0, slicedToArray.Z)(
                _useOnWindowResizeDel,
                2
              ),
              sizeDeltaY =
                (_useOnWindowResizeDel2[0], _useOnWindowResizeDel2[1]),
              handleRef = function handleRef(scrollDelta) {
                if (ref && ref.current) {
                  var coords = ref.current.getBoundingClientRect(),
                    viewport = Math.max(
                      0,
                      window.innerHeight - topMargin - bottomMargin
                    ),
                    excess =
                      coords.height > viewport ? coords.height - viewport : 0;
                  scrollDelta <= 0
                    ? setOffset(
                        Math.max(topMargin - excess, offset + scrollDelta)
                      )
                    : scrollDelta > 0 &&
                      setOffset(Math.min(topMargin, offset + scrollDelta));
                }
              };
            return (
              (0, react.useEffect)(
                function () {
                  handleRef(scrollDelta);
                },
                [scrollDelta]
              ),
              (0, react.useEffect)(
                function () {
                  handleRef(-sizeDeltaY);
                },
                [sizeDeltaY]
              ),
              (0, jsx_runtime.jsx)(
                Sticky,
                (0, objectSpread2.Z)(
                  (0, objectSpread2.Z)({ $offset: offset, ref: ref }, props),
                  {},
                  { children: children }
                )
              )
            );
          },
          Sticky = styled_components_browser_esm.ZP.div(
            _templateObject ||
              (_templateObject = (0, taggedTemplateLiteral.Z)([
                '\n  position: sticky;\n  top: ',
                'px;\n',
              ])),
            function (_ref2) {
              return _ref2.$offset;
            }
          );
        try {
          (StickyEndsContainer.displayName = 'StickyEndsContainer'),
            (StickyEndsContainer.__docgenInfo = {
              description: '',
              displayName: 'StickyEndsContainer',
              props: {
                topMargin: {
                  defaultValue: { value: '0' },
                  description: '',
                  name: 'topMargin',
                  required: !1,
                  type: { name: 'number' },
                },
                bottomMargin: {
                  defaultValue: { value: '0' },
                  description: '',
                  name: 'bottomMargin',
                  required: !1,
                  type: { name: 'number' },
                },
              },
            }),
            'undefined' != typeof STORYBOOK_REACT_CLASSES &&
              (STORYBOOK_REACT_CLASSES[
                'src/UI/components/layout/StickyEndsContainer/StickyEndsContainer.tsx#StickyEndsContainer'
              ] = {
                docgenInfo: StickyEndsContainer.__docgenInfo,
                name: 'StickyEndsContainer',
                path: 'src/UI/components/layout/StickyEndsContainer/StickyEndsContainer.tsx#StickyEndsContainer',
              });
        } catch (__react_docgen_typescript_loader_error) {}
      },
    './src/UI/components/layout/TwoColumn/TwoColumn.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return TwoColumn;
        },
      });
      var _templateObject,
        _templateObject2,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _utility_hooks_ResponsiveProps__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./src/UI/utility/hooks/ResponsiveProps.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'leftRatio', 'rightRatio', 'breakIfLessThan'],
        TwoColumn = function TwoColumn(_ref) {
          var _ref$children = _ref.children,
            children = void 0 === _ref$children ? [] : _ref$children,
            _ref$leftRatio = _ref.leftRatio,
            leftRatio = void 0 === _ref$leftRatio ? 0.5 : _ref$leftRatio,
            _ref$rightRatio = _ref.rightRatio,
            rightRatio = void 0 === _ref$rightRatio ? 0.5 : _ref$rightRatio,
            breakIfLessThan = _ref.breakIfLessThan,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          (leftRatio = Math.max(0, leftRatio)),
            (rightRatio = Math.max(0, rightRatio));
          var shouldBreak =
            void 0 === breakIfLessThan ||
            (0, _utility_hooks_ResponsiveProps__WEBPACK_IMPORTED_MODULE_1__.mE)(
              breakIfLessThan
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            Wrapper,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                props
              ),
              {},
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    Content,
                    {
                      $ratio: leftRatio / (leftRatio + rightRatio),
                      $shouldBreak: shouldBreak,
                      children: children[0] && children[0],
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                    Content,
                    {
                      $ratio: rightRatio / (leftRatio + rightRatio),
                      $shouldBreak: shouldBreak,
                      children: children[1] && children[1],
                    }
                  ),
                ],
              }
            )
          );
        },
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  width: 100%;\n\n  display: flex;\n  flex-wrap: wrap;\n']
            ))
        ),
        Content = styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  width: ', ';\n  flex-grow: ', ';\n']
            )),
          function (_ref2) {
            return _ref2.$shouldBreak ? '100%' : '0px';
          },
          function (_ref3) {
            return _ref3.$ratio;
          }
        );
      try {
        (TwoColumn.displayName = 'TwoColumn'),
          (TwoColumn.__docgenInfo = {
            description: '',
            displayName: 'TwoColumn',
            props: {
              leftRatio: {
                defaultValue: { value: '0.5' },
                description: '',
                name: 'leftRatio',
                required: !1,
                type: { name: 'number' },
              },
              rightRatio: {
                defaultValue: { value: '0.5' },
                description: '',
                name: 'rightRatio',
                required: !1,
                type: { name: 'number' },
              },
              breakIfLessThan: {
                defaultValue: null,
                description: '',
                name: 'breakIfLessThan',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/layout/TwoColumn/TwoColumn.tsx#TwoColumn'
            ] = {
              docgenInfo: TwoColumn.__docgenInfo,
              name: 'TwoColumn',
              path: 'src/UI/components/layout/TwoColumn/TwoColumn.tsx#TwoColumn',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/layout/TwoColumn/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return _TwoColumn__WEBPACK_IMPORTED_MODULE_0__.z;
        },
      });
      var _TwoColumn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/layout/TwoColumn/TwoColumn.tsx'
      );
    },
    './src/UI/components/text/Paragraph/Paragraph.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        n: function () {
          return Paragraph;
        },
      });
      var _templateObject,
        _templateObject2,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = [
          'children',
          'size',
          'weight',
          'textAlign',
          'lineHeight',
          'color',
          'isWrapped',
        ],
        Paragraph = function Paragraph(_ref) {
          var _ref$children = _ref.children,
            children = void 0 === _ref$children ? '' : _ref$children,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'default' : _ref$size,
            _ref$weight = _ref.weight,
            weight = void 0 === _ref$weight ? 'regular' : _ref$weight,
            _ref$textAlign = _ref.textAlign,
            textAlign = void 0 === _ref$textAlign ? 'left' : _ref$textAlign,
            _ref$lineHeight = _ref.lineHeight,
            lineHeight =
              void 0 === _ref$lineHeight ? 'normal' : _ref$lineHeight,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? 'text' : _ref$color,
            _ref$isWrapped = _ref.isWrapped,
            isWrapped = void 0 === _ref$isWrapped || _ref$isWrapped,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            Text,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
                {
                  $size: size,
                  $weight: weight,
                  $textAlign: textAlign,
                  $lineHeight: lineHeight,
                  $color: color,
                  $isWrapped: isWrapped,
                },
                props
              ),
              {},
              { children: children }
            )
          );
        },
        TextLine = (0, styled_components__WEBPACK_IMPORTED_MODULE_4__.iv)(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              [
                '\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n',
              ]
            ))
        ),
        Text = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.p(
          _templateObject2 ||
            (_templateObject2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              [
                '\n  ',
                '\n\n  ',
                '\n\n  overflow-wrap: anywhere;\n  margin: 0px;\n',
              ]
            )),
          function (_ref2) {
            var theme = _ref2.theme,
              $size = _ref2.$size,
              $weight = _ref2.$weight,
              $textAlign = _ref2.$textAlign,
              $lineHeight = _ref2.$lineHeight,
              $color = _ref2.$color;
            return '\n    font-family: '
              .concat(theme.font.default.family, ';\n    font-size: ')
              .concat(
                theme.font.default.size[$size] || $size,
                ';\n    font-weight: '
              )
              .concat(
                theme.font.default.weight[$weight] || $weight,
                ';\n    text-align: '
              )
              .concat($textAlign, ';\n    line-height: ')
              .concat($lineHeight, ';\n    color: ')
              .concat(theme.color[$color] || $color, ';\n    transition: ')
              .concat(theme.speed.normal, ';\n    word-spacing: ')
              .concat(theme.font.default.wordSpacing.default, ';\n');
          },
          function (_ref3) {
            return !_ref3.$isWrapped && TextLine;
          }
        );
      try {
        (Paragraph.displayName = 'Paragraph'),
          (Paragraph.__docgenInfo = {
            description: '',
            displayName: 'Paragraph',
            props: {
              size: {
                defaultValue: { value: 'default' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string' },
              },
              weight: {
                defaultValue: { value: 'regular' },
                description: '',
                name: 'weight',
                required: !1,
                type: { name: 'string' },
              },
              textAlign: {
                defaultValue: { value: 'left' },
                description: '',
                name: 'textAlign',
                required: !1,
                type: { name: 'string' },
              },
              lineHeight: {
                defaultValue: { value: 'normal' },
                description: '',
                name: 'lineHeight',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: 'text' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              isWrapped: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isWrapped',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/text/Paragraph/Paragraph.tsx#Paragraph'
            ] = {
              docgenInfo: Paragraph.__docgenInfo,
              name: 'Paragraph',
              path: 'src/UI/components/text/Paragraph/Paragraph.tsx#Paragraph',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/text/Paragraph/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        n: function () {
          return _Paragraph__WEBPACK_IMPORTED_MODULE_0__.n;
        },
      });
      var _Paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/text/Paragraph/Paragraph.tsx'
      );
    },
    './src/UI/components/text/TextButton/TextButton.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        A: function () {
          return TextButton;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/Paragraph.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children'],
        TextButton = function TextButton(_ref) {
          var children = _ref.children,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            Text,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                { isWrapped: !1, weight: 'regular' },
                props
              ),
              {},
              { children: children }
            )
          );
        },
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
          _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  letter-spacing: ', ';\n  padding-left: ', ';\n']
            )),
          function (_ref2) {
            return _ref2.theme.font.default.wordSpacing.button;
          },
          function (_ref3) {
            return _ref3.theme.font.default.wordSpacing.button;
          }
        );
      try {
        (TextButton.displayName = 'TextButton'),
          (TextButton.__docgenInfo = {
            description: '',
            displayName: 'TextButton',
            props: {
              children: {
                defaultValue: null,
                description: 'Text',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string' },
              },
              weight: {
                defaultValue: null,
                description: '',
                name: 'weight',
                required: !1,
                type: { name: 'string' },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: { name: 'string' },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              isWrapped: {
                defaultValue: null,
                description: '',
                name: 'isWrapped',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/text/TextButton/TextButton.tsx#TextButton'
            ] = {
              docgenInfo: TextButton.__docgenInfo,
              name: 'TextButton',
              path: 'src/UI/components/text/TextButton/TextButton.tsx#TextButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/text/TextButton/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        A: function () {
          return _TextButton__WEBPACK_IMPORTED_MODULE_0__.A;
        },
      });
      var _TextButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/text/TextButton/TextButton.tsx'
      );
    },
    './src/UI/components/text/TextCaption/TextCaption.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        $: function () {
          return TextCaption;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/Paragraph.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children'],
        TextCaption = function TextCaption(_ref) {
          var children = _ref.children,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            Text,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                props
              ),
              {},
              { size: 'small', children: children }
            )
          );
        },
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
          _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  ', ';\n']
            )),
          function (_ref2) {
            var theme = _ref2.theme;
            return '\n    text-align:\tcenter;\n    color: '
              .concat(theme.color.textNeutral, ';\n    font-size: ')
              .concat(theme.font.default.size.small, ';\n  ');
          }
        );
      try {
        (TextCaption.displayName = 'TextCaption'),
          (TextCaption.__docgenInfo = {
            description: '',
            displayName: 'TextCaption',
            props: {
              children: {
                defaultValue: null,
                description: 'Text to be used as caption',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string' },
              },
              weight: {
                defaultValue: null,
                description: '',
                name: 'weight',
                required: !1,
                type: { name: 'string' },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: { name: 'string' },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              isWrapped: {
                defaultValue: null,
                description: '',
                name: 'isWrapped',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/text/TextCaption/TextCaption.tsx#TextCaption'
            ] = {
              docgenInfo: TextCaption.__docgenInfo,
              name: 'TextCaption',
              path: 'src/UI/components/text/TextCaption/TextCaption.tsx#TextCaption',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/text/TextCaption/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        $: function () {
          return _TextCaption__WEBPACK_IMPORTED_MODULE_0__.$;
        },
      });
      var _TextCaption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/text/TextCaption/TextCaption.tsx'
      );
    },
    './src/UI/components/text/TextFooter/TextFooter.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        M: function () {
          return TextFooter;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/Paragraph.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children'],
        TextFooter = function TextFooter(_ref) {
          var children = _ref.children,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            Text,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                props
              ),
              {},
              { children: children }
            )
          );
        },
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
          _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  ', ';\n']
            )),
          function (_ref2) {
            var theme = _ref2.theme;
            return '\n    text-align:\tcenter;\n    color: '
              .concat(theme.color.textNeutral, ';\n\n    font-size: ')
              .concat(theme.font.default.size.tiny, ';\n  ');
          }
        );
      try {
        (TextFooter.displayName = 'TextFooter'),
          (TextFooter.__docgenInfo = {
            description: '',
            displayName: 'TextFooter',
            props: {
              children: {
                defaultValue: null,
                description: 'Text to be used as caption',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string' },
              },
              weight: {
                defaultValue: null,
                description: '',
                name: 'weight',
                required: !1,
                type: { name: 'string' },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: { name: 'string' },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              isWrapped: {
                defaultValue: null,
                description: '',
                name: 'isWrapped',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/text/TextFooter/TextFooter.tsx#TextFooter'
            ] = {
              docgenInfo: TextFooter.__docgenInfo,
              name: 'TextFooter',
              path: 'src/UI/components/text/TextFooter/TextFooter.tsx#TextFooter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/text/TextLink/TextLink.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        h: function () {
          return TextLink;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/Paragraph.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children'],
        TextLink = function TextLink(_ref) {
          var children = _ref.children,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            Text,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                {},
                props
              ),
              {},
              { children: children }
            )
          );
        },
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
          _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              [
                '\n  cursor: pointer;\n  color: ',
                ';\n  text-decoration: underline;\n\n  &:hover {\n    color: ',
                ';\n  }\n\n  transition: ',
                ';\n',
              ]
            )),
          function (_ref2) {
            return _ref2.theme.color.textNeutral;
          },
          function (_ref3) {
            return _ref3.theme.color.textHovered;
          },
          function (_ref4) {
            return _ref4.theme.speed.normal;
          }
        );
      try {
        (TextLink.displayName = 'TextLink'),
          (TextLink.__docgenInfo = {
            description: '',
            displayName: 'TextLink',
            props: {
              children: {
                defaultValue: null,
                description: 'Text to be used as caption',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: null,
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'string' },
              },
              weight: {
                defaultValue: null,
                description: '',
                name: 'weight',
                required: !1,
                type: { name: 'string' },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: { name: 'string' },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              isWrapped: {
                defaultValue: null,
                description: '',
                name: 'isWrapped',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/text/TextLink/TextLink.tsx#TextLink'
            ] = {
              docgenInfo: TextLink.__docgenInfo,
              name: 'TextLink',
              path: 'src/UI/components/text/TextLink/TextLink.tsx#TextLink',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/text/TextLink/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        h: function () {
          return _TextLink__WEBPACK_IMPORTED_MODULE_0__.h;
        },
      });
      var _TextLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/text/TextLink/TextLink.tsx'
      );
    },
    './src/UI/components/text/TextTitle/TextTitle.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        w: function () {
          return TextTitle;
        },
      });
      var _templateObject,
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
          ),
        styled_components__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__(
            './node_modules/styled-components/dist/styled-components.browser.esm.js'
          )),
        _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/UI/components/text/Paragraph/Paragraph.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        _excluded = ['children', 'size'],
        TextTitle = function TextTitle(_ref) {
          var children = _ref.children,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 'medium' : _ref$size,
            props = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
            Text,
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              (0,
              C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                { $size: size, weight: 'bold2' },
                props
              ),
              {},
              { children: children }
            )
          );
        },
        Text = (0, styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(
          _Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n
        )(
          _templateObject ||
            (_templateObject = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              ['\n  font-size: ', ';\n']
            )),
          function (_ref2) {
            switch (_ref2.$size) {
              case 'small':
                return '1.6rem';
              case 'medium':
                return '3.0rem';
              case 'large':
                return '4.0rem';
            }
          }
        );
      try {
        (TextTitle.displayName = 'TextTitle'),
          (TextTitle.__docgenInfo = {
            description: '',
            displayName: 'TextTitle',
            props: {
              children: {
                defaultValue: null,
                description: 'Text to be used as title',
                name: 'children',
                required: !1,
                type: { name: 'ReactNode' },
              },
              size: {
                defaultValue: { value: 'medium' },
                description: 'Text size',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"large"' },
                    { value: '"small"' },
                    { value: '"medium"' },
                  ],
                },
              },
              weight: {
                defaultValue: null,
                description: '',
                name: 'weight',
                required: !1,
                type: { name: 'string' },
              },
              textAlign: {
                defaultValue: null,
                description: '',
                name: 'textAlign',
                required: !1,
                type: { name: 'string' },
              },
              lineHeight: {
                defaultValue: null,
                description: '',
                name: 'lineHeight',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              isWrapped: {
                defaultValue: null,
                description: '',
                name: 'isWrapped',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/UI/components/text/TextTitle/TextTitle.tsx#TextTitle'
            ] = {
              docgenInfo: TextTitle.__docgenInfo,
              name: 'TextTitle',
              path: 'src/UI/components/text/TextTitle/TextTitle.tsx#TextTitle',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/UI/components/text/TextTitle/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        w: function () {
          return _TextTitle__WEBPACK_IMPORTED_MODULE_0__.w;
        },
      });
      var _TextTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/UI/components/text/TextTitle/TextTitle.tsx'
      );
    },
    './src/UI/utility/hooks/ResponsiveProps.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        gY: function () {
          return GreaterThanHook;
        },
        mE: function () {
          return LessThanHook;
        },
      });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        useMediaQuery = function useMediaQuery(query) {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
            _useState2 = (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              _useState,
              2
            ),
            matches = _useState2[0],
            setMatches = _useState2[1];
          return (
            (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
              function () {
                var media = window.matchMedia(query);
                media.matches !== matches && setMatches(media.matches);
                var listener = function listener() {
                  setMatches(media.matches);
                };
                return (
                  window.addEventListener('resize', listener),
                  function () {
                    return window.removeEventListener('resize', listener);
                  }
                );
              },
              [matches, query]
            ),
            matches
          );
        },
        LessThanHook = function LessThanHook(pixels) {
          return useMediaQuery('(max-width: '.concat(pixels, 'px)'));
        },
        GreaterThanHook = function GreaterThanHook(pixels) {
          return useMediaQuery('(min-width: '.concat(pixels, 'px)'));
        };
    },
    './src/UI/utility/hooks/useOnWindowScrollDelta.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return useOnWindowScrollDelta;
        },
      });
      var C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
          ),
        C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        );
      function useOnWindowScrollDelta(callback) {
        var triggers =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
            window.pageYOffset
          ),
          _useState2 = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            _useState,
            2
          ),
          oldValue = _useState2[0],
          setOldValue = _useState2[1],
          _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
          _useState4 = (0,
          C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            _useState3,
            2
          ),
          delta = _useState4[0],
          setDelta = _useState4[1];
        return (
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            var handleScroll = function handleScroll(e) {
              var newValue = window.pageYOffset,
                delta = oldValue - newValue;
              0 !== delta &&
                (callback && callback(delta),
                setDelta(delta),
                setOldValue(newValue));
            };
            return (
              window.addEventListener('scroll', handleScroll),
              function () {
                window.removeEventListener('scroll', handleScroll);
              }
            );
          }, [oldValue].concat(
            (0,
            C_Users_elson_Desktop_Portfolio_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              triggers
            )
          )),
          delta
        );
      }
    },
    './src/UI/utility/scripts/Array.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      function distributeIntoChunks(array, parts) {
        for (var result = [], i = 0; i < parts; i++) result.push([]);
        for (var n = 0, _i = 0; _i < array.length; _i++)
          n > result.length - 1 && (n = 0),
            result[n] && result[n].push(array[_i]),
            (n += 1);
        return result;
      }
      function getElementAt(array, index) {
        var i = index % array.length;
        return array.at(i);
      }
      function findClosestNumber(array, number) {
        for (var curr = array[0], i = 0; i < array.length; i++) {
          var val = array[i];
          Math.abs(number - val) < Math.abs(number - curr) && (curr = val);
        }
        return curr;
      }
      __webpack_require__.d(__webpack_exports__, {
        hi: function () {
          return getElementAt;
        },
        l8: function () {
          return distributeIntoChunks;
        },
        sY: function () {
          return findClosestNumber;
        },
      });
    },
    './src/UI/utility/styles/ResponsiveCSS.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        G: function () {
          return GreaterThan;
        },
        o: function () {
          return LessThan;
        },
      });
      var Media = { mobileSmall: 320, mobileLarge: 414, tablet: 834 },
        LessThan = function LessThan(media, style) {
          return (
            Media[media]
              ? (media = Media[media] + 1 + 'px')
              : 'number' == typeof media && (media = ''.concat(media, 'px')),
            '\n    @media all and (max-width: '
              .concat(media, ') {\n        ')
              .concat(style, '\n    }\n')
          );
        },
        GreaterThan = function GreaterThan(media, style) {
          return (
            Media[media]
              ? (media = Media[media] + 1 + 'px')
              : 'number' == typeof media && (media = ''.concat(media, 'px')),
            '\n    @media all and (min-width: '
              .concat(media, ') {\n        ')
              .concat(style, '\n    }\n')
          );
        };
    },
    './src/UI/utility/themes/Theme.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Q: function () {
          return Theme;
        },
      });
      var objectSpread2 = __webpack_require__(
          './node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        ),
        Linkedin_esm = __webpack_require__(
          './node_modules/@styled-icons/fa-brands/Linkedin/Linkedin.esm.js'
        ),
        Github_esm = __webpack_require__(
          './node_modules/@styled-icons/fa-brands/Github/Github.esm.js'
        ),
        Email_esm = __webpack_require__(
          './node_modules/@styled-icons/material-rounded/Email/Email.esm.js'
        ),
        ChevronUpDown_esm = __webpack_require__(
          './node_modules/@styled-icons/fluentui-system-regular/ChevronUpDown/ChevronUpDown.esm.js'
        ),
        Close_esm = __webpack_require__(
          './node_modules/@styled-icons/zondicons/Close/Close.esm.js'
        ),
        ArrowRight_esm = __webpack_require__(
          './node_modules/@styled-icons/zondicons/ArrowRight/ArrowRight.esm.js'
        ),
        ArrowLeft_esm = __webpack_require__(
          './node_modules/@styled-icons/zondicons/ArrowLeft/ArrowLeft.esm.js'
        ),
        ThemeAsset = {
          icon: {
            logo: '/images/logo.svg',
            exampleIconBasic: '/images/examples/logo.svg',
            exampleIconThin: '/images/examples/arrow.svg',
            exampleIconColored: '/images/examples/Photoshop.svg',
            Linkedin: Linkedin_esm.n,
            Github: Github_esm.E,
            Email: Email_esm.G,
            DropdownChevron: ChevronUpDown_esm.j,
            modalClose: Close_esm.x,
            modalRight: ArrowRight_esm.o,
            modalLeft: ArrowLeft_esm.X,
          },
          image: {
            profile: '/images/profile.png',
            exampleSmall: '/images/examples/small.jpg',
            exampleSquare: '/images/examples/square.jpg',
            exampleLandscape: '/images/examples/landscape.jpg',
            examplePortrait: '/images/examples/portrait.jpg',
          },
        },
        Theme = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)(
            (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {},
                {
                  font: {
                    family: "'Manrope', sans-serif",
                    weight: {
                      light1: 200,
                      light2: 300,
                      regular: 400,
                      medium: 500,
                      semiBold: 600,
                      bold2: 700,
                    },
                    size: {
                      tiny: '0.62rem',
                      small: '0.80rem',
                      default: '0.94rem',
                      large: '1.1rem',
                      h6: '1.2rem',
                      h5: '1.3rem',
                      h4: '1.4rem',
                      h3: '1.55rem',
                      h2: '1.75rem',
                      h1: '2rem',
                    },
                    spacing: { default: 'normal', button: '0.08rem' },
                    wordSpacing: { default: '0.08rem' },
                  },
                }
              ),
              {
                color: {
                  text: '#1a1a1a',
                  textHovered: '#3d3d3d',
                  textNeutral: '#a8a8a8',
                  outline: 'lightgrey',
                  backgroundHighlight: '#e6e6e6',
                  background: '#ffffff',
                  whiteBackdropDown:
                    '\n    linear-gradient(\n      to bottom,\n      hsl(0, 0%, 100%) 0%,\n      hsla(0, 0%, 100%, 0.987) 8.1%,\n      hsla(0, 0%, 100%, 0.951) 15.5%,\n      hsla(0, 0%, 100%, 0.896) 22.5%,\n      hsla(0, 0%, 100%, 0.825) 29%,\n      hsla(0, 0%, 100%, 0.741) 35.3%,\n      hsla(0, 0%, 100%, 0.648) 41.2%,\n      hsla(0, 0%, 100%, 0.55) 47.1%,\n      hsla(0, 0%, 100%, 0.45) 52.9%,\n      hsla(0, 0%, 100%, 0.352) 58.8%,\n      hsla(0, 0%, 100%, 0.259) 64.7%,\n      hsla(0, 0%, 100%, 0.175) 71%,\n      hsla(0, 0%, 100%, 0.104) 77.5%,\n      hsla(0, 0%, 100%, 0.049) 84.5%,\n      hsla(0, 0%, 100%, 0.013) 91.9%,\n      hsla(0, 0%, 100%, 0) 100%\n    )',
                  greyBackdropUp:
                    '\n    linear-gradient(\n      to top,\n      hsla(0, 0%, 0%, 0.51) 0%,\n      hsla(0, 0%, 0%, 0.504) 8.1%,\n      hsla(0, 0%, 0%, 0.485) 15.5%,\n      hsla(0, 0%, 0%, 0.457) 22.5%,\n      hsla(0, 0%, 0%, 0.421) 29%,\n      hsla(0, 0%, 0%, 0.378) 35.3%,\n      hsla(0, 0%, 0%, 0.33) 41.2%,\n      hsla(0, 0%, 0%, 0.28) 47.1%,\n      hsla(0, 0%, 0%, 0.23) 52.9%,\n      hsla(0, 0%, 0%, 0.18) 58.8%,\n      hsla(0, 0%, 0%, 0.132) 64.7%,\n      hsla(0, 0%, 0%, 0.089) 71%,\n      hsla(0, 0%, 0%, 0.053) 77.5%,\n      hsla(0, 0%, 0%, 0.025) 84.5%,\n      hsla(0, 0%, 0%, 0.006) 91.9%,\n      hsla(0, 0%, 0%, 0) 100%\n    )',
                  greyBackdropLeft:
                    '\n    linear-gradient(\n      to left,\n      hsla(0, 0%, 0%, 0.51) 0%,\n      hsla(0, 0%, 0%, 0.504) 8.1%,\n      hsla(0, 0%, 0%, 0.485) 15.5%,\n      hsla(0, 0%, 0%, 0.457) 22.5%,\n      hsla(0, 0%, 0%, 0.421) 29%,\n      hsla(0, 0%, 0%, 0.378) 35.3%,\n      hsla(0, 0%, 0%, 0.33) 41.2%,\n      hsla(0, 0%, 0%, 0.28) 47.1%,\n      hsla(0, 0%, 0%, 0.23) 52.9%,\n      hsla(0, 0%, 0%, 0.18) 58.8%,\n      hsla(0, 0%, 0%, 0.132) 64.7%,\n      hsla(0, 0%, 0%, 0.089) 71%,\n      hsla(0, 0%, 0%, 0.053) 77.5%,\n      hsla(0, 0%, 0%, 0.025) 84.5%,\n      hsla(0, 0%, 0%, 0.006) 91.9%,\n      hsla(0, 0%, 0%, 0) 100%\n    )',
                  greyBackdropRight:
                    '\n    linear-gradient(\n      to right,\n      hsla(0, 0%, 0%, 0.51) 0%,\n      hsla(0, 0%, 0%, 0.504) 8.1%,\n      hsla(0, 0%, 0%, 0.485) 15.5%,\n      hsla(0, 0%, 0%, 0.457) 22.5%,\n      hsla(0, 0%, 0%, 0.421) 29%,\n      hsla(0, 0%, 0%, 0.378) 35.3%,\n      hsla(0, 0%, 0%, 0.33) 41.2%,\n      hsla(0, 0%, 0%, 0.28) 47.1%,\n      hsla(0, 0%, 0%, 0.23) 52.9%,\n      hsla(0, 0%, 0%, 0.18) 58.8%,\n      hsla(0, 0%, 0%, 0.132) 64.7%,\n      hsla(0, 0%, 0%, 0.089) 71%,\n      hsla(0, 0%, 0%, 0.053) 77.5%,\n      hsla(0, 0%, 0%, 0.025) 84.5%,\n      hsla(0, 0%, 0%, 0.006) 91.9%,\n      hsla(0, 0%, 0%, 0) 100%\n    )',
                },
              }
            ),
            ThemeAsset
          ),
          {
            layer: { header: 9998, modal: 9999 },
            speed: {
              fast: '0.15s',
              normal: '0.25s',
              slow: '0.4s',
              loading: '1s',
              test: '3s',
            },
            size: { headerHeight: 44, footerHeight: 102 },
          }
        );
    },
    './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
      function (module, __unused_webpack_exports, __webpack_require__) {
        var map = {
          './UI/components/_overview/,Welcome/Welcome.stories.tsx':
            './src/UI/components/_overview/,Welcome/Welcome.stories.tsx',
          './UI/components/_overview/Color/Colors.stories.tsx':
            './src/UI/components/_overview/Color/Colors.stories.tsx',
          './UI/components/_overview/Typography/Typography.stories.tsx':
            './src/UI/components/_overview/Typography/Typography.stories.tsx',
          './UI/components/atoms/DiamondLabel/DiamondLabel.stories.tsx':
            './src/UI/components/atoms/DiamondLabel/DiamondLabel.stories.tsx',
          './UI/components/atoms/Fact/Fact.stories.tsx':
            './src/UI/components/atoms/Fact/Fact.stories.tsx',
          './UI/components/atoms/GalleryProjectPanel/GalleryProjectPanel.stories.tsx':
            './src/UI/components/atoms/GalleryProjectPanel/GalleryProjectPanel.stories.tsx',
          './UI/components/atoms/HorizontalBulletMenu/HorizontalBulletMenu.stories.tsx':
            './src/UI/components/atoms/HorizontalBulletMenu/HorizontalBulletMenu.stories.tsx',
          './UI/components/atoms/IIcon/IIcon.stories.tsx':
            './src/UI/components/atoms/IIcon/IIcon.stories.tsx',
          './UI/components/atoms/IIconImage/IIconImage.stories.tsx':
            './src/UI/components/atoms/IIconImage/IIconImage.stories.tsx',
          './UI/components/atoms/IIconSVG/IIconSVG.stories.tsx':
            './src/UI/components/atoms/IIconSVG/IIconSVG.stories.tsx',
          './UI/components/atoms/IconLoading/IconLoading.stories.tsx':
            './src/UI/components/atoms/IconLoading/IconLoading.stories.tsx',
          './UI/components/atoms/IconScroll/IconScroll.stories.tsx':
            './src/UI/components/atoms/IconScroll/IconScroll.stories.tsx',
          './UI/components/atoms/Image/Image.stories.tsx':
            './src/UI/components/atoms/Image/Image.stories.tsx',
          './UI/components/atoms/ImageThumbnail/ImageThumbnail.stories.tsx':
            './src/UI/components/atoms/ImageThumbnail/ImageThumbnail.stories.tsx',
          './UI/components/atoms/ImageThumbnailFixed/ImageThumbnailFixed.stories.tsx':
            './src/UI/components/atoms/ImageThumbnailFixed/ImageThumbnailFixed.stories.tsx',
          './UI/components/atoms/ImageTitle/ImageTitle.stories.tsx':
            './src/UI/components/atoms/ImageTitle/ImageTitle.stories.tsx',
          './UI/components/atoms/PageTitle/PageTitle.stories.tsx':
            './src/UI/components/atoms/PageTitle/PageTitle.stories.tsx',
          './UI/components/atoms/ProgressLine/ProgressLine.stories.tsx':
            './src/UI/components/atoms/ProgressLine/ProgressLine.stories.tsx',
          './UI/components/atoms/ProjectLanding/ProjectLanding.stories.tsx':
            './src/UI/components/atoms/ProjectLanding/ProjectLanding.stories.tsx',
          './UI/components/atoms/ProjectMenu/ProjectMenu.stories.tsx':
            './src/UI/components/atoms/ProjectMenu/ProjectMenu.stories.tsx',
          './UI/components/atoms/ProjectMenuHorizontal/ProjectMenuHorizontal.stories.tsx':
            './src/UI/components/atoms/ProjectMenuHorizontal/ProjectMenuHorizontal.stories.tsx',
          './UI/components/atoms/ProjectSectionFactList/ProjectSectionFactList.stories.tsx':
            './src/UI/components/atoms/ProjectSectionFactList/ProjectSectionFactList.stories.tsx',
          './UI/components/atoms/ProjectSectionImage/ProjectSectionImage.stories.tsx':
            './src/UI/components/atoms/ProjectSectionImage/ProjectSectionImage.stories.tsx',
          './UI/components/atoms/ProjectSectionText/ProjectSectionText.stories.tsx':
            './src/UI/components/atoms/ProjectSectionText/ProjectSectionText.stories.tsx',
          './UI/components/atoms/ProjectSectionTitle/ProjectSectionTitle.stories.tsx':
            './src/UI/components/atoms/ProjectSectionTitle/ProjectSectionTitle.stories.tsx',
          './UI/components/atoms/RowIconTextButton/RowIconTextButton.stories.tsx':
            './src/UI/components/atoms/RowIconTextButton/RowIconTextButton.stories.tsx',
          './UI/components/groups/About/About.stories.tsx':
            './src/UI/components/groups/About/About.stories.tsx',
          './UI/components/groups/Explore/Explore.stories.tsx':
            './src/UI/components/groups/Explore/Explore.stories.tsx',
          './UI/components/groups/Footer/Footer/Footer.stories.tsx':
            './src/UI/components/groups/Footer/Footer/Footer.stories.tsx',
          './UI/components/groups/Footer/FooterCopyright/FooterCopyright.stories.tsx':
            './src/UI/components/groups/Footer/FooterCopyright/FooterCopyright.stories.tsx',
          './UI/components/groups/Footer/FooterIconRow/FooterIconRow.stories.tsx':
            './src/UI/components/groups/Footer/FooterIconRow/FooterIconRow.stories.tsx',
          './UI/components/groups/Footer/FooterLink/FooterLink.stories.tsx':
            './src/UI/components/groups/Footer/FooterLink/FooterLink.stories.tsx',
          './UI/components/groups/GalleryHeader/GalleryHeaderBase/GalleryHeaderBase.stories.tsx':
            './src/UI/components/groups/GalleryHeader/GalleryHeaderBase/GalleryHeaderBase.stories.tsx',
          './UI/components/groups/GalleryHeader/GalleryHeaderBrowser/GalleryHeaderBrowser.stories.tsx':
            './src/UI/components/groups/GalleryHeader/GalleryHeaderBrowser/GalleryHeaderBrowser.stories.tsx',
          './UI/components/groups/GalleryHeader/GalleryHeaderMain/GalleryHeaderMain.stories.tsx':
            './src/UI/components/groups/GalleryHeader/GalleryHeaderMain/GalleryHeaderMain.stories.tsx',
          './UI/components/groups/GalleryHeader/GalleryHeaderMobile/GalleryHeaderMobile.stories.tsx':
            './src/UI/components/groups/GalleryHeader/GalleryHeaderMobile/GalleryHeaderMobile.stories.tsx',
          './UI/components/groups/GalleryHeader/GalleryHeaderTablet/GalleryHeaderTablet.stories.tsx':
            './src/UI/components/groups/GalleryHeader/GalleryHeaderTablet/GalleryHeaderTablet.stories.tsx',
          './UI/components/groups/GalleryProject/GalleryProject.stories.tsx':
            './src/UI/components/groups/GalleryProject/GalleryProject.stories.tsx',
          './UI/components/groups/Header/Header/Header.stories.tsx':
            './src/UI/components/groups/Header/Header/Header.stories.tsx',
          './UI/components/groups/Header/HeaderLogo/HeaderLogo.stories.tsx':
            './src/UI/components/groups/Header/HeaderLogo/HeaderLogo.stories.tsx',
          './UI/components/groups/Header/HeaderTabs/HeaderTabs.stories.tsx':
            './src/UI/components/groups/Header/HeaderTabs/HeaderTabs.stories.tsx',
          './UI/components/groups/Header/HeaderTabsMobile/HeaderTabsMobile.stories.tsx':
            './src/UI/components/groups/Header/HeaderTabsMobile/HeaderTabsMobile.stories.tsx',
          './UI/components/groups/ModalImage/ModalImage.stories.tsx':
            './src/UI/components/groups/ModalImage/ModalImage.stories.tsx',
          './UI/components/groups/Project/Project/Project.stories.tsx':
            './src/UI/components/groups/Project/Project/Project.stories.tsx',
          './UI/components/groups/Project/ProjectLayout/ProjectLayout.stories.tsx':
            './src/UI/components/groups/Project/ProjectLayout/ProjectLayout.stories.tsx',
          './UI/components/groups/Project/ProjectSection/ProjectSection.stories.tsx':
            './src/UI/components/groups/Project/ProjectSection/ProjectSection.stories.tsx',
          './UI/components/groups/Tabs/Tabs.stories.tsx':
            './src/UI/components/groups/Tabs/Tabs.stories.tsx',
          './UI/components/inputs/Button/Button.stories.tsx':
            './src/UI/components/inputs/Button/Button.stories.tsx',
          './UI/components/inputs/ButtonModal/ButtonModal.stories.tsx':
            './src/UI/components/inputs/ButtonModal/ButtonModal.stories.tsx',
          './UI/components/inputs/ButtonModalClose/ButtonModalClose.stories.tsx':
            './src/UI/components/inputs/ButtonModalClose/ButtonModalClose.stories.tsx',
          './UI/components/inputs/ButtonModalNext/ButtonModalNext.stories.tsx':
            './src/UI/components/inputs/ButtonModalNext/ButtonModalNext.stories.tsx',
          './UI/components/inputs/ButtonReverse/ButtonReverse.stories.tsx':
            './src/UI/components/inputs/ButtonReverse/ButtonReverse.stories.tsx',
          './UI/components/inputs/ButtonReverseText/ButtonReverseText.stories.tsx':
            './src/UI/components/inputs/ButtonReverseText/ButtonReverseText.stories.tsx',
          './UI/components/inputs/ButtonText/ButtonText.stories.tsx':
            './src/UI/components/inputs/ButtonText/ButtonText.stories.tsx',
          './UI/components/inputs/Dropdown/Dropdown.stories.tsx':
            './src/UI/components/inputs/Dropdown/Dropdown.stories.tsx',
          './UI/components/inputs/DropdownHeader/DropdownHeader.stories.tsx':
            './src/UI/components/inputs/DropdownHeader/DropdownHeader.stories.tsx',
          './UI/components/inputs/DropdownItem/DropdownItem.stories.tsx':
            './src/UI/components/inputs/DropdownItem/DropdownItem.stories.tsx',
          './UI/components/inputs/HeaderTab/HeaderTab.stories.tsx':
            './src/UI/components/inputs/HeaderTab/HeaderTab.stories.tsx',
          './UI/components/inputs/IconExternalLink/IconLinkExternal.stories.tsx':
            './src/UI/components/inputs/IconExternalLink/IconLinkExternal.stories.tsx',
          './UI/components/inputs/LinkExternalFactText/LinkExternalFactText.stories.tsx':
            './src/UI/components/inputs/LinkExternalFactText/LinkExternalFactText.stories.tsx',
          './UI/components/inputs/LinkFake/LinkFake.stories.tsx':
            './src/UI/components/inputs/LinkFake/LinkFake.stories.tsx',
          './UI/components/inputs/ScrollHandler/ScrollHandler.stories.tsx':
            './src/UI/components/inputs/ScrollHandler/ScrollHandler.stories.tsx',
          './UI/components/inputs/Tab/Tab.stories.tsx':
            './src/UI/components/inputs/Tab/Tab.stories.tsx',
          './UI/components/layout/Grid/Grid.stories.tsx':
            './src/UI/components/layout/Grid/Grid.stories.tsx',
          './UI/components/layout/GridDynamic/GridDynamic.stories.tsx':
            './src/UI/components/layout/GridDynamic/GridDynamic.stories.tsx',
          './UI/components/layout/GridRow/GridRow.stories.tsx':
            './src/UI/components/layout/GridRow/GridRow.stories.tsx',
          './UI/components/layout/Modal/Modal.stories.tsx':
            './src/UI/components/layout/Modal/Modal.stories.tsx',
          './UI/components/layout/RowCenter/RowCenter.stories.tsx':
            './src/UI/components/layout/RowCenter/RowCenter.stories.tsx',
          './UI/components/layout/RowIcon/RowIcon.stories.tsx':
            './src/UI/components/layout/RowIcon/RowIcon.stories.tsx',
          './UI/components/layout/RowIconText/RowIconText.stories.tsx':
            './src/UI/components/layout/RowIconText/RowIconText.stories.tsx',
          './UI/components/layout/StickyEndsContainer/StickyEndsContainer.stories.tsx':
            './src/UI/components/layout/StickyEndsContainer/StickyEndsContainer.stories.tsx',
          './UI/components/layout/TwoColumn/TwoColumn.stories.tsx':
            './src/UI/components/layout/TwoColumn/TwoColumn.stories.tsx',
          './UI/components/other/Loading/Loading.stories.tsx':
            './src/UI/components/other/Loading/Loading.stories.tsx',
          './UI/components/text/Paragraph/Paragraph.stories.tsx':
            './src/UI/components/text/Paragraph/Paragraph.stories.tsx',
          './UI/components/text/TextButton/TextButton.stories.tsx':
            './src/UI/components/text/TextButton/TextButton.stories.tsx',
          './UI/components/text/TextCaption/TextCaption.stories.tsx':
            './src/UI/components/text/TextCaption/TextCaption.stories.tsx',
          './UI/components/text/TextFooter/TextFooter.stories.tsx':
            './src/UI/components/text/TextFooter/TextFooter.stories.tsx',
          './UI/components/text/TextLink/TextLink.stories.tsx':
            './src/UI/components/text/TextLink/TextLink.stories.tsx',
          './UI/components/text/TextTitle/TextTitle.stories.tsx':
            './src/UI/components/text/TextTitle/TextTitle.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$');
      },
    './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$':
      function (module) {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        (webpackEmptyContext.keys = function () {
          return [];
        }),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (webpackEmptyContext.id =
            './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$'),
          (module.exports = webpackEmptyContext);
      },
    './storybook-init-framework-entry.js': function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js'
      );
    },
    '?4f7e': function () {},
    './generated-stories-entry.cjs': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      'use strict';
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js'
        ).configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
            ),
          ],
          module,
          !1
        );
    },
  },
  function (__webpack_require__) {
    var __webpack_exec__ = function (moduleId) {
      return __webpack_require__((__webpack_require__.s = moduleId));
    };
    __webpack_require__.O(0, [50], function () {
      return (
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_exec__('./storybook-init-framework-entry.js'),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-links/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
        __webpack_exec__('./generated-stories-entry.cjs')
      );
    });
    __webpack_require__.O();
  },
]);
