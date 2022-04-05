(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{472:function(t,a,e){"use strict";e.r(a);var s=e(36),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"migration-from-v1-to-v2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migration-from-v1-to-v2"}},[t._v("#")]),t._v(" Migration from v1 to v2")]),t._v(" "),e("p",[t._v("A lot of things have changed from v1 to v2. First and foremost, we have officially dropped support for NodeJS 10, "),e("a",{attrs:{href:"https://github.com/epispot/EpiJS/pull/54",target:"_blank",rel:"noopener noreferrer"}},[t._v("along with MathJS dropping support"),e("OutboundLink")],1),t._v(". This shouldn't change much as NodeJS 10.x was "),e("a",{attrs:{href:"https://endoflife.date/nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("already end-of-lifed"),e("OutboundLink")],1),t._v(", so we highly suggest upgrading your NodeJS version to the latest version or a LTS release.")]),t._v(" "),e("p",[t._v("Next, the big deprecation. This release now removes built-in plotting from the "),e("code",[t._v("pre")]),t._v(" module, and moved it to the brand-new "),e("code",[t._v("plots")]),t._v(" module. Why? Currently, the only way to interact with the data is through the chart, but other things you might want to do with the data, whatever they might be, most likely can't be done. So, we've changed the output to this format:")]),t._v(" "),e("div",{staticClass:"language-JSON extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    label"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("COMPARTMENT NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'\n    data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Note that this is repeated for each compartment in a list, so to access a compartment, use the number corresponding to the value in the name of the model, for example, "),e("code",[t._v("data[0]")]),t._v(" would access the susceptible compartment in any model for the "),e("code",[t._v("pre")]),t._v(" compartment, as it comes first in all the SIR-based models. "),e("code",[t._v("data[1]")]),t._v(" might access an infected compartment or exposed compartment, based on the model, and so on.")]),t._v(" "),e("p",[t._v("However the syntax has also changed. Before it was:")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canvas'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parameters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Take for example the SIR model:")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canvas'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("This creates a graph on the canvas for a model of an infection which has an r-naught of 4, susceptble population of 9999, infected population of 1, recovery rate of 1/21, and a total population of 10000, which it plots for 100 days. However, now, it changed to this:")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ourmodel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("plot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ourmodel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canvas'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("We obviously removed the canvas parameter, as we no longer plot with the pre model, and added the "),e("code",[t._v("plot")]),t._v(" function from the "),e("code",[t._v("plots")]),t._v(" module to plot it to the canvas. Let's start with that, however. First, we select the model, "),e("code",[t._v("ourmodel")]),t._v(", and then select the canvas, and then we add this new parameter, 100, which selects the amount of days to plot for, which allows us to plot 50 days, or even 1 day, but, for this case, we plot it for 100. As for the new parameter in the "),e("code",[t._v("sir")]),t._v(" function, is a new feature we added. Stochastic modelling. This allows for more accurate modelling of models, and we set it to true to make sure we model stochastically. Stochastic modelling also allows for extinctions, so when the infected population is very low, the disease might go extinct, as there is a probability they won't spread it to the people needed to keep the disease alive. Stochastic models then also give you different outputs each time, to better model an outbreak. You can still set this to false if you'd like to still have the same graph as before.")]),t._v(" "),e("p",[t._v("Another important aspect is that this variable was added to the majority of functions/classes. Your Idiom class can now be stochastic if you add a "),e("code",[t._v("w")]),t._v(" to the equation, which EpiJS will auto-generate each run as a random number from the gaussian distribution. In the "),e("code",[t._v("com")]),t._v(" module, when running a function on a class, there's the new parameter "),e("code",[t._v("stochastic")]),t._v(", which is like the other parameter in "),e("code",[t._v("pre")]),t._v(", it's a boolean which defines whether the model is stochastic or not.")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" outbreak "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("virus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Is now:")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" oubreak "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("virus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Makes a stochastic sir model.")]),t._v("\n")])])]),e("p",[t._v("On the topic of the com module, the "),e("code",[t._v("h")]),t._v(" parameter is now gone on creating viruses, as there was never a pre-built "),e("code",[t._v("seihrd")]),t._v(" model, or any model which used a hospitalized compartment.")]),t._v(" "),e("p",[t._v("So, then why should you switch? You're doing fine right now! Well, not only is v2 a LTS release, meaning we'll support it for a long time (we're thinking around 2 major releases, if we even get that far!), but the release is introducing tons of new features!")]),t._v(" "),e("h2",{attrs:{id:"new-features-in-v2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new-features-in-v2"}},[t._v("#")]),t._v(" New Features in "),e("code",[t._v("v2")])]),t._v(" "),e("ul",[e("li",[t._v("Stochastic modelling,")]),t._v(" "),e("li",[t._v("Custom models in "),e("code",[t._v("com")]),t._v(" module,")]),t._v(" "),e("li",[t._v("New pre-built compartments for you to use in "),e("code",[t._v("comp")]),t._v(", including:\n"),e("ul",[e("li",[t._v("Susceptible,")]),t._v(" "),e("li",[t._v("Exposed,")]),t._v(" "),e("li",[t._v("Infected,")]),t._v(" "),e("li",[t._v("Hospitalized,")]),t._v(" "),e("li",[t._v("Critical,")]),t._v(" "),e("li",[t._v("Recovered,")]),t._v(" "),e("li",[t._v("Dead,")]),t._v(" "),e("li",[t._v("and Vaccinated compartments,")])])]),t._v(" "),e("li",[t._v("A new utils compartment, which has epidemiological related utilities,")]),t._v(" "),e("li",[t._v("Bug fixes,")]),t._v(" "),e("li",[t._v("Customizable plotting,")]),t._v(" "),e("li",[t._v("Allows for more interaction with data from "),e("code",[t._v("pre")]),t._v(" module,")]),t._v(" "),e("li",[t._v("metadata on the web, through "),e("code",[t._v("EpiJS.about")]),t._v(", "),e("code",[t._v("EpiJS.version")]),t._v(", etc.")])]),t._v(" "),e("p",[t._v("and there's more coming in the new releases! You can just look at the "),e("a",{attrs:{href:"https://github.com/epispot/EpiJS/projects/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("features project board"),e("OutboundLink")],1),t._v(" to get a preview at what's ahead!")]),t._v(" "),e("p",[t._v("Additionally, you can access all the functions via:")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("EpiJS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("like:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("EpiJS.pre.sir()\n")])])]),e("p",[t._v("why you would want to do that when you can just do "),e("code",[t._v("sir()")]),t._v(" is beyond me, but, it's an option!")])])}),[],!1,null,null,null);a.default=n.exports}}]);