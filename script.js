// Add event listener to visualize chemical reactions on the Sun
document.addEventListener("DOMContentLoaded", function () {
    const reactionVisualization = document.getElementById("reaction-visualization");
    
    // Simulate the proton-proton chain reaction visualization
    const canvas = document.createElement("canvas");
    canvas.width = reactionVisualization.offsetWidth;
    canvas.height = reactionVisualization.offsetHeight;
    reactionVisualization.appendChild(canvas);
    
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#007bff";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Proton-Proton Chain Reaction", canvas.width / 2, canvas.height / 2);
});
