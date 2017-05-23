export const panelCollapse = function() {
    return {
        type: 'COLLAPSE',
        panel: 'false'
    }
}

export const panelExpand = function() {
    return {
        type: 'EXPAND',
        panel: 'true'
    }
}