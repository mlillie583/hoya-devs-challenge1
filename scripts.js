{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('netid-form').addEventListener('submit', async function(event) \{\
    event.preventDefault();\
    \
    const netid = document.getElementById('netid').value;\
    const teamName = 'NetID Ninjas';\
    \
    try \{\
        const response = await fetch('https://bootcamp.hoyadevelopers.com/api/bootcamp/submitNetId', \{\
            method: 'POST',\
            headers: \{\
                'Content-Type': 'application/json',\
            \},\
            body: JSON.stringify(\{\
                netid: netid,\
                team_name: teamName,\
            \}),\
        \});\
\
        if (response.status === 201) \{\
            alert('NetID submitted successfully!');\
            document.getElementById('netid').value = '';\
        \} else \{\
            alert('Failed to submit NetID. Please try again.');\
        \}\
    \} catch (error) \{\
        alert('An error occurred. Please try again.');\
    \}\
\});\
}