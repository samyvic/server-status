export const servers = [
    { 
        id: 1,
        name: 'XOrithm',
        ipAddress: '192.168.1.1',
        status: 'Online',
        responseTime: `${getRandomUpTime(50,250).toFixed(0)}ms`,
        uptime: `${getRandomUpTime(98,100).toFixed(0)}%`,
        history: [
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
        ],
    },
    { 
        id: 2,
        name: 'XOrithm API',
        ipAddress: '192.168.1.2',
        status: 'Offline',
        responseTime: `${getRandomUpTime(50,250).toFixed(0)}ms`,
        uptime: `${getRandomUpTime(98,100).toFixed(0)}%`,
        history: [
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Offline', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-01'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-02'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-03'), status: 'Online', responseTime: 50, uptime: '99%' },
            { timestamp: new Date('2024-01-04'), status: 'Online', responseTime: 50, uptime: '99%' },
          
        ],
    },
    
]


function getRandomUpTime(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomResponseTime(min, max) {
    return Math.random() * (max - min) + min;
}