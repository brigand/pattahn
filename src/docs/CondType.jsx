const React = require('react');
const matchAll = require('string.prototype.matchall');
const { useConfig } = require('docz');
require('./CondType.css');

function parse(text) {
  const paren = text.indexOf('(');

  const funcName = text.slice(0, paren).trim();

  const rest = text.slice(paren + 1).replace(/^(.*)\)[^)]*$/g, '$1');
  const args = rest.split(',').map((arg) => {
    const colon = arg.indexOf(':');
    const name = arg.slice(0, colon).trim();
    let ty = arg.slice(colon + 1).trim();

    const eq = ty.indexOf('=');
    let defaultValue = null;
    if (eq !== -1) {
      defaultValue = ty.slice(eq + 1).trim();
      ty = ty.slice(0, eq).trim();
    }

    return { name, ty, defaultValue };
  });

  return { funcName, args };
}

function Ty({ text, getCodeStyle }) {
  const style = getCodeStyle('atrule') || getCodeStyle('selector');

  if (text === 'IntoCondition') {
    return (
      <a style={style} href="/into-condition">
        {text}
      </a>
    );
  }
  return <em style={style}>{text}</em>;
}

function Default({ text }) {
  if (text) {
    return `= ${text}`;
  } else {
    return null;
  }
}

// example input: `And(first: IntoCondition, second: IntoCondition)`
function CondType({ children }) {
  const config = useConfig();

  const { themeConfig } = useConfig();

  const getCodeStyle = (type) => {
    const item = themeConfig.prism.dark.styles.find((style) =>
      style.types.includes(type),
    );
    return (item && item.style) || null;
  };

  const text = React.Children.toArray(children)
    .map(String)
    .join('')
    .replace(/\s+/g, ' ')
    .trim();

  const { funcName, args } = parse(text);

  return (
    <h2 className="pattahn-CondType">
      <span style={getCodeStyle('function')}>{funcName}</span>
      {'('}
      <ul>
        {args.map((arg, i) => (
          <li key={i}>
            <strong style={getCodeStyle('property')}>{arg.name}</strong>:{' '}
            <Ty text={arg.ty} getCodeStyle={getCodeStyle} />
            <Default text={arg.defaultValue} getCodeStyle={getCodeStyle} />
            {','}
          </li>
        ))}
      </ul>
      {')'}
    </h2>
  );
}

export default CondType;
