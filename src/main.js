import './style.css'

const apiGatewayUrl = "https://lib-martinito-resume-api-gateway-2gjc7aij.ts.gateway.dev"

async function getViews() {
    try {
        const response = await fetch(`${apiGatewayUrl}/get-views`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        document.getElementById("view-count").textContent = data.views
    } catch (e) {
        console.error("Error fetching view count: ", e)
        document.getElementById("view-count").textContent = "Error loading views"
    }
}

window.addEventListener("DOMContentLoaded", getViews)
