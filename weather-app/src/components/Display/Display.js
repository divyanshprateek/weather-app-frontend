import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Display.css';

const Display = (data) => {
    const current = data?.data?.current;
    const currentKeys = Object.keys(current).filter((key) => !['weather_descriptions', 'weather_icons'].includes(key));

    const weatherDisplay = () => {
        return <>
            <div className='weather-display' >
                {currentKeys.map((key, index) =>
                    <span className='items' key={index} style={{'color': '#4c2948'}}>{`${key}: ${current[key]}`}</span>
                )}
            </div>
        </>;
    }

    return (
        <>
            <Card className="text-center mt-5">
                <Card.Header style={{'backgroundColor': '#573299', 'borderColor': '#573299', 'color': '#fff'}}>Country: {data?.data?.location?.country}</Card.Header>
                <Card.Body>
                    <Card.Title>Current Weather: {current['weather_icons'] && current['weather_icons'].length ? current['weather_icons'].map((icon) => <img
                        src={icon}
                        alt="new"
                        height={50}
                        width={50}
                    />) : <></>}

                        {current['weather_descriptions'] && current['weather_descriptions'].length ? current['weather_descriptions'].map((desc) => <span className='mx-2'>{desc}</span>) : <></>}
                    </Card.Title>
                    {weatherDisplay()}
                    {/* <Button className='btn-sm' style={{'backgroundColor': '#4c2948', 'borderColor': '#4c2948'}}>Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted"  style={{'backgroundColor': '#573299', 'borderColor': '#573299', 'color': '#fff'}}></Card.Footer>
            </Card>
        </>
    );
}

export default Display;
